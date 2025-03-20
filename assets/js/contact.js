document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contact-form");
    const status = document.querySelector("#form-status");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the page from reloading

        const formData = new FormData(form);

        fetch("https://formspree.io/f/YOUR_FORM_ID", { // Replace with your actual Formspree endpoint
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        })
        .then(response => {
            if (response.ok) {
                status.textContent = "Message sent successfully!";
                status.style.color = "green";
                status.style.display = "block";
                form.reset(); // Clear the form
            } else {
                status.textContent = "Oops! There was a problem submitting your form.";
                status.style.color = "red";
                status.style.display = "block";
            }
        })
        .catch(error => {
            status.textContent = "Something went wrong. Please try again.";
            status.style.color = "red";
            status.style.display = "block";
        });
    });
});
