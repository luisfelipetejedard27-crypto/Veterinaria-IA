document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("form-cita");

    if (formulario) {
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            
            alert("🐾 ¡Gracias por confiar en nosotros, Luis Felipe! Tu solicitud de cita ha sido registrada con éxito. Nos comunicaremos contigo en breve.");
            
            formulario.reset();
        });
    }
});
