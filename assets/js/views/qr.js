// assets/js/views/qr.js

function qr() {
  const formulario =
    ""; // Configura aquí el enlace de tu formulario de pruebas.
  const accesoFormulario = formulario
    ? `<a class="btn" href="${esc(formulario)}" target="_blank" rel="noopener noreferrer">Abrir formulario</a>`
    : `<p class="muted">Formulario pendiente de configurar en esta copia de portafolio.</p>`;

  shell(`
    ${heading(
      "Registro presencial",
      "Configura el formulario de pruebas para recibir solicitudes."
    )}

    <div class="request-layout">
      <section class="panel">
        <div class="qr-pending">
          <h2>Formulario de solicitud de material</h2>

          <p class="muted">
            Esta copia no incluye el código QR ni el enlace del formulario original.
          </p>

          ${accesoFormulario}

          <p class="muted">
            Al terminar, avisa al encargado para revisar tu solicitud.
          </p>
        </div>
      </section>

      <section class="panel">
        <h2>Cómo registrar un préstamo</h2>

        <div class="step">
          <span class="step-num">1</span>
          <p>El estudiante llega a la oficina y abre el formulario configurado.</p>
        </div>

        <div class="step">
          <span class="step-num">2</span>
          <p>
            Escribe nombre, matrícula, correo, materiales,
            cantidades y fecha/hora de devolución.
          </p>
        </div>

        <div class="step">
          <span class="step-num">3</span>
          <p>
            El empleado recibe la solicitud y confirma
            la entrega presencial.
          </p>
        </div>

        <a class="btn full" href="#simular">
          Registrar solicitud en la oficina ${icon("arrow")}
        </a>

        <p
          class="muted"
          style="font-size: 11px; margin: 15px 0 0;"
        >
          También puedes registrar la solicitud aquí si el
          estudiante necesita ayuda con el formulario.
        </p>
      </section>
    </div>
  `);
}