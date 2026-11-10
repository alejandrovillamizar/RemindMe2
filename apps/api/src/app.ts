import express from "express";
import cors from "cors";
import helmet from "helmet";
import { env } from "./config/env.js";
import { prisma } from "./lib/prisma.js";

export const app = express();
app.disable("x-powered-by");
app.use(helmet());
app.use(cors({ origin: env.CLIENT_ORIGIN, credentials: true }));
app.use(express.json({ limit: "20kb" }));

app.get("/api/v1/health", async (_req, res, next) => {
  try {
    await prisma.$queryRawUnsafe("SELECT 1");
    res.status(200).json({ status: "ok", service: "RemindME API", database: "connected", timestamp: new Date().toISOString() });
  } catch (error) {
    next(error);
  }
});

app.use((_req, res) => {
  res.status(404).json({ error: { code: "NOT_FOUND", message: "Ruta no encontrada." } });
});

app.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  if (env.NODE_ENV !== "production") console.error(error);
  res.status(500).json({ error: { code: "INTERNAL_SERVER_ERROR", message: "Ocurrió un error inesperado." } });
});
