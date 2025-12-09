// Efecto hover dinámico
document.querySelectorAll(".footer-links a").forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.classList.add("hover-active");
    });

    link.addEventListener("mouseleave", () => {
        link.classList.remove("hover-active");
    });
});

// Animación de aparición del footer
window.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");

    setTimeout(() => {
        footer.style.opacity = 1;
    }, 150);
});
