// Await full page load to run script
document.addEventListener("DOMContentLoaded", function () {
    const navImage = document.getElementById("nav-image")
    const menuContainer = document.querySelector(".nav-menu")
    const imageMap = {
        home: "assets/network_drawing_red.svg",
        articles: "assets/network_drawing_purple.svg",
        resume: "assets/network_drawing_jadegreen.svg",
        contact: "assets/network_drawing_blue.svg"
    };
    // Change image when hovering over a menu item
    menuContainer.addEventListener("mouseover", function (event) {
        // Check if the hovered item is a menu link
        if (event.target.classList.contains("menu-item")) {
            navImage.src = imageMap[event.target.id];
            navImage.style.color = "red";
        }
    });

    // Reset image only when leaving the entire menu area
    menuContainer.addEventListener("mouseleave", function () {
        navImage.src = "assets/network_drawing_grey.svg"; // Change image

        });
});
