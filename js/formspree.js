document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact_form");
    if (!contactForm) return;

    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const btn = document.getElementById("send_message");
        const successMsg = document.getElementById("mail_success");
        const errorMsg = document.getElementById("mail_fail");

        btn.disabled = true;
        btn.value = "Enviando...";
        successMsg.style.display = "none";
        errorMsg.style.display = "none";

        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: new FormData(contactForm),
                headers: { "Accept": "application/json" }
            });

            if (response.ok) {
                successMsg.style.display = "block";
                contactForm.reset();
            } else {
                errorMsg.style.display = "block";
            }
        } catch (error) {
            errorMsg.style.display = "block";
        } finally {
            btn.disabled = false;
            btn.value = "Enviar Mensaje";
        }
    });
});