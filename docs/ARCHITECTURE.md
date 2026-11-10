# Arquitectura inicial

## Decisión principal

RemindME utiliza un monorepo con una aplicación Expo compartida para Android, iOS y web. React Native Web permite reutilizar componentes y lógica sin mantener dos interfaces divergentes. La API se mantiene separada para que clientes móviles y web consuman el mismo contrato.

## Componentes

- **Client**: Expo, Expo Router, React Native, React Native Web y TypeScript.
- **API**: Node.js, Express 5, TypeScript y validación Zod.
- **Shared**: esquemas y tipos compartidos.
- **Database**: MySQL 8; Prisma y migraciones se incorporarán en la siguiente etapa.

## Seguridad prevista

- Hash de contraseñas con Argon2id o bcrypt configurado con coste apropiado.
- Sesiones/refresh tokens rotatorios; cookies HttpOnly, Secure y SameSite para web.
- Almacenamiento seguro en dispositivos nativos mediante SecureStore.
- Validación de entradas, rate limiting, CORS de origen permitido y Helmet.
- Verificación de propiedad en cada consulta y mutación de recordatorios.
- No guardar secretos, contraseñas ni tokens en el repositorio.

## Tiempo y notificaciones

Los instantes se normalizan a UTC en el servidor y se conserva una zona IANA para presentar fechas locales correctamente. Las notificaciones locales móviles y push requieren permisos, registro de dispositivos y programación backend; no están implementadas todavía.

## Escalabilidad

La API se organizará por módulos (auth, users, reminders). La lógica de negocio se separará de controladores y persistencia. Los contratos compartidos evitarán duplicar validaciones entre cliente y servidor.
