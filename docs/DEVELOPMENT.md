# Guía de desarrollo

## Requisitos

- Node.js 22 LTS
- npm 10+
- MySQL 8+ (se conectará al incorporar persistencia)

## Instalación

Desde la raíz del repositorio:

```bash
npm install
```

Copia `apps/api/.env.example` a `apps/api/.env` y configura tus variables locales. Nunca subas ese archivo.

## Ejecutar

Terminal 1 (API):

```bash
npm run dev:api
```

Terminal 2 (cliente web):

```bash
npm run web
```

API health check: http://localhost:4000/api/v1/health

## Verificaciones

```bash
npm run typecheck
```

Las suites de pruebas y lint se configurarán en las siguientes etapas.
