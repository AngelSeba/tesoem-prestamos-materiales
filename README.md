# TESOEM · Sistema de préstamos de materiales

Aplicación web para administrar solicitudes, entrega y devolución de materiales en un entorno escolar. Centraliza el seguimiento de préstamos y las existencias disponibles.

**Tecnologías:** HTML · CSS · JavaScript · Google Apps Script · Google Sheets.

**Estado:** copia preparada para portafolio. Requiere configurar un backend propio para iniciar sesión y operar. No incluye una demostración pública ni datos de una institución. La instalación en Google y su funcionamiento real no se han validado en esta revisión.

## El problema

El préstamo de materiales necesita seguimiento de lo solicitado, lo entregado y lo que todavía no se devuelve. El sistema organiza ese flujo para que el personal pueda consultar inventario y préstamos desde un panel.

## Funcionalidades presentes en el código

- Inicio de sesión y permisos para administración y personal encargado.
- Consulta de solicitudes y aceptación con entrega presencial.
- Registro de devoluciones parciales y completas.
- Seguimiento de préstamos activos, vencidos e historial.
- Consulta y administración de inventario y personal según permisos.
- Registro de movimientos de materiales.
- Integración configurable con solicitudes de Google Forms.
- Interfaz para abrir recordatorios manuales en WhatsApp; requiere una extensión del backend que no está incluida en este ZIP. No envía mensajes automáticamente.

## Equipo y aportación personal

Proyecto desarrollado en equipo por [Ángel — AngelSeba](https://github.com/AngelSeba) y [giovas128-2](https://github.com/giovas128-2).

| Integrante | Responsabilidades |
| --- | --- |
| [Ángel — AngelSeba](https://github.com/AngelSeba) | Desarrollo del backend con Google Apps Script, desarrollo de la API y creación de la estructura de las tablas de datos. |
| [giovas128-2](https://github.com/giovas128-2) | Desarrollo del frontend: interfaz de usuario. |

Mi participación se centró en hacer funcionar la lógica del servidor mediante Google Apps Script, desarrollar la API para comunicar la interfaz con el backend y preparar las tablas de datos del sistema. El frontend fue desarrollado por mi compañero [giovas128-2](https://github.com/giovas128-2).

En el código de esta versión, las tablas se consultan y actualizan mediante Google Sheets. La creación de las tablas forma parte de mi aportación al proyecto.

## Cómo está construido

El navegador carga HTML, CSS y JavaScript. Los servicios del frontend se comunican con una aplicación web de Google Apps Script y esta consulta o modifica tablas en Google Sheets.

**Flujo principal:** solicitud → entrega → préstamo activo → devolución parcial o completa → historial.

El frontend no usa React. Node.js se utiliza para servir los archivos localmente y ejecutar verificaciones; no es el backend de la aplicación.

## Ejecutar localmente

Necesitas Node.js 18 o superior, conforme al requisito declarado por el proyecto. No hay dependencias que instalar.

```sh
npm start
```

Abre http://localhost:3000. El servidor muestra la pantalla de acceso, pero para iniciar sesión necesitas configurar Apps Script y una cuenta de prueba activa. No se incluyen cuentas demo del sistema.

### Configurar un entorno propio

1. Crea una hoja y un proyecto de Google Apps Script para pruebas.
2. Sigue [la guía de instalación](docs/INSTALAR_PASO_A_PASO.md), incluyendo tablas, permisos, servicios y cuenta inicial.
3. Sustituye `ID_DE_TU_HOJA_DE_PRUEBAS` en `backend/Codigo.gs` por el ID de tu hoja.
4. Publica el backend y sustituye `ID_DE_TU_DESPLIEGUE` en `assets/js/config/api-config.js` por el ID de esa implementación.
5. Si utilizas Forms, configura tu enlace en `assets/js/views/qr.js` y el activador indicado en la guía. El QR institucional original se omitió; esta copia muestra un aviso hasta configurar el formulario.

Utiliza registros ficticios para las pruebas y las demostraciones. No conectes una demostración pública al entorno operativo.

## Verificaciones locales

```sh
npm run check
npm test
```

La primera orden verifica sintaxis de JavaScript y referencias del HTML. Las pruebas comprueban lógica de inventario, devoluciones, fechas, roles, sesiones y respuestas de WhatsApp con servicios simulados. Las pruebas del backend ejecutan los archivos `.gs` con un emulador local de servicios Google.

Estas verificaciones no prueban el despliegue real de Google, los permisos en la nube, el envío de formularios ni la integración real con WhatsApp.

## Estructura

| Carpeta | Contenido |
| --- | --- |
| `interfaces/` | Pantallas de acceso y panel |
| `assets/css/` | Estilos de la interfaz |
| `assets/js/components/` | Componentes de interfaz |
| `assets/js/views/` | Vistas de solicitudes, préstamos, inventario y personal |
| `assets/js/services/` | Comunicación con la API y acceso a datos |
| `backend/` | Google Apps Script y manifiesto |
| `docs/` | Instalación, contratos y notas técnicas |
| `tests/` | Pruebas automatizadas locales |
| `scripts/` | Servidor local y verificación |

## Límites y próximos pasos

- Configurar y validar una instalación de pruebas en Google.
- Agregar capturas con datos ficticios y una demostración independiente.
- Integrar o retirar de la demostración la función opcional de WhatsApp: el backend requerido no forma parte de esta copia.
- Actualizar las notas históricas de entrega conforme se confirme el estado real del sistema.

Los documentos [del contrato v2](docs/CONTRATO_V2.md) y de instalación describen el backend incluido. `CONTRATO_API.txt` y `NOTAS_ENTREGA_ORIGINAL.md` se conservan como antecedentes y pueden describir versiones anteriores. La guía de WhatsApp explica la integración adicional que falta.

## Publicación y licencias

Esta copia reemplaza los identificadores del despliegue, de la hoja y del formulario originales por valores de ejemplo. Las credenciales ficticias de `tests/` pertenecen únicamente al emulador local.

Se conserva la [licencia de la dependencia criptográfica](backend/LICENCIA_noble_hashes.txt). No se ha asignado una licencia general al proyecto: revisa autoría y permisos de publicación antes de elegirla.

Repositorio propuesto: `AngelSeba/tesoem-prestamos-materiales`.
