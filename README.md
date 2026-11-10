# RemindME

**No olvides lo que importa.**

RemindME es una aplicación multiplataforma de recordatorios, diseñada para funcionar en web, Android e iOS desde una base de código compartida.

## Estado del proyecto

Este repositorio contiene la base técnica inicial. La implementación se construirá por etapas: configuración, experiencia de usuario, autenticación, gestión de recordatorios, persistencia y notificaciones.

## Arquitectura

- `apps/client`: Expo + React Native + Expo Router + React Native Web (web, Android e iOS).
- `apps/api`: API REST con Node.js, Express y TypeScript.
- `packages/shared`: contratos y validaciones compartidas con Zod.
- `docs`: arquitectura, decisiones técnicas y guía de desarrollo.

## Requisitos

- Node.js 22 LTS o superior compatible con Expo SDK elegido.
- npm 10 o superior.
- MySQL 8.0+.

## Primeros pasos

Consulta `docs/DEVELOPMENT.md` para preparar el entorno. Los archivos `.env` reales nunca deben subirse al repositorio; usa los archivos `.env.example` como referencia.

## Principios

- TypeScript estricto y validación en los límites del sistema.
- Diseño responsive y accesible.
- Autorización por propietario en todos los recursos privados.
- Fechas almacenadas en UTC y zona horaria IANA por usuario/recordatorio.
- Pruebas automatizadas y CI desde el inicio.

## Licencia

Pendiente de definir.
