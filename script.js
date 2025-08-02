document.addEventListener("DOMContentLoaded", function () {
    // Mostrar/Ocultar submenús
    const menuItems = document.querySelectorAll("nav ul li");

    menuItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            let submenu = item.querySelector(".submenu");
            if (submenu) {
                submenu.style.display = "block";
            }
        });

        item.addEventListener("mouseleave", () => {
            let submenu = item.querySelector(".submenu");
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    });
})