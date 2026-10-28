// Publicar el contrato v2 antes de utilizar esta interfaz. No incluir contraseñas aquí.
const API_CONFIG = Object.freeze({
  url: "https://script.google.com/macros/s/ID_DE_TU_DESPLIEGUE/exec",
  timeoutMs: 60000,
  pollMs: 90000,
  // JSON dentro de text/plain evita solicitar un preflight por application/json.
  // Apps Script debe analizar e.postData.contents independientemente del MIME.
  postContentType: "text/plain;charset=UTF-8",
});
