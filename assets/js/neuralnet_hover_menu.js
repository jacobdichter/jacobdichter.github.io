// Await full page load to run script
document.addEventListener("DOMContentLoaded", function () {
    const navImage = document.getElementById("nav-image")
    const imageMap = {
        home: "assets/network_drawing_red.svg",
        articles: "assets/network_drawing_purple.svg",
        resume: "assets/network_drawing_jadegreen.svg",
        contact: "assets/network_drawing_blue.svg"
    };
    // Select all menu items
    const menuItems = document.querySelectorAll(".menu-item");

    // Add event listeners to each menu-item
    menuItems.forEach(item => {
        item.addEventListener("mouseover", function () {
            // Return ID of hovered menu-item
            navImage.src = imageMap[this.id];
        });

        item.addEventListener("mouseout", function () {
            //Reset to grey network menu
            navImage.src = "assets/network_drawing_grey.svg";
        });
    });
});
