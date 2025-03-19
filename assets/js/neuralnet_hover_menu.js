// Await full page load to run script
document.addEventListener("DOMContentLoaded", function () {
    const navImage = document.getElementById("nav-image")
    const menuContainer = document.querySelector(".nav-menu")
    // Select all menu items once
    const menuItems = document.querySelectorAll(".menu-item");

    const imageMap = {
        home: "assets/network_drawing_red.svg",
        articles: "assets/network_drawing_purple.svg",
        resume: "assets/network_drawing_jadegreen.svg",
        contact: "assets/network_drawing_blue.svg"
    };

        const hoverStyles = {
        home: { color: "#FA5252"},
        articles: { color: "#874FFF"},
        resume: { color: "#19B654"},
        contact: { color: "#2979FF"}
    };

        // Default styles
        const defaultStyles = {
        home: { color: "" }, // Default color (or any initial color)
        articles: { color: "" },
        resume: { color: "" },
        contact: { color: "" }
    };
    
    // Change image when hovering over a menu item
    menuContainer.addEventListener("mouseover", function (event) {
        // Check if the hovered item is a menu link
        if (event.target.classList.contains("menu-item")) {
            menuItems.forEach(function (item) {
            // Reset to default color
            item.style.color = defaultStyles[item.id].color;  
            });
            // Change neuralnet image
            navImage.src = imageMap[event.target.id];

            // Apply the corresponding hover color to the hovered menu item
            const itemId = event.target.id;
            event.target.style.color = hoverStyles[itemId].color;
        }
    });

    // Reset image only when leaving the entire menu area
    menuContainer.addEventListener("mouseleave", function () {
        navImage.src = "assets/network_drawing_grey.svg"; // Change image back

        const menuItems = document.querySelectorAll(".menu-item");
        menuItems.forEach(function (item) {
            item.style.color = defaultStyles[item.id].color;  // Reset to default color
        });
        
    });
});
