document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contact-form");
    const status = document.querySelector("#form-status");

    if (!form) {
        console.error("Form element not found!");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        const formData = new FormData(form);

        fetch("https://formspree.io/f/xwplvwvn", { // Your actual Formspree endpoint
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                status.textContent = "Message sent successfully!";
                status.style.color = "green";
                status.style.fontWeight = "bold";
                status.style.display = "block";
                form.reset(); // Clear the form
            } else {
                status.textContent = "Oops! There was a problem submitting your form.";
                status.style.color = "red";
                status.style.display = "block";
            }
        })
        .catch(error => {
            console.error("Error submitting form:", error);
            status.textContent = "Something went wrong. Please try again.";
            status.style.color = "red";
            status.style.display = "block";
        });
    });
});
