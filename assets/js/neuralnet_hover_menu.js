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

        const hoverStyles = {
        home: { color: "#FA5252"},
        articles: { color: "#874FFF"},
        resume: { color: "#19B654"},
        contact: { color: "#2979FF"}
    };
    // Change image when hovering over a menu item
    menuContainer.addEventListener("mouseover", function (event) {
        // Check if the hovered item is a menu link
        if (event.target.classList.contains("menu-item")) {
            // Change neuralnet image
            navImage.src = imageMap[event.target.id];
            
            // Apply the font color and background color changes
            const styles = hoverStyles[event.target.id];
            event.target.style.color = styles.color;
        }
    });

    // Reset image only when leaving the entire menu area
    menuContainer.addEventListener("mouseleave", function () {
        navImage.src = "assets/network_drawing_grey.svg"; // Change image back
        
        // Reset styles for each item in the imageMap
        Object.keys(imageMap).forEach(function (key) {
            const menuItem = document.getElementById(key);
            if (menuItem) {
                menuItem.style.color = ""; // Reset text color
                menuItem.style.backgroundColor = ""; // Reset background color
            }
        });
    });
});
