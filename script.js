/**
 * Abre/Cierra el menú en móviles
 */
function toggleMenu() {
    const menu = document.getElementById('nav-links');
    const icon = document.getElementById('menu-icon');
    
    if (window.innerWidth < 768) {
        menu.classList.toggle('active');
        
        if (menu.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    }
}

/**
 * Control del giro del engranaje (Scroll Wheel)
 * Funciona en Desktop y Mobile
 */
window.onscroll = function() {
    var theta = (document.documentElement.scrollTop / 5) % 360;
    const wheel = document.getElementById('scrollWheel');
    
    if (wheel) {
        wheel.style.transform = 'rotate(' + theta + 'deg)';
    }
};

/**
 * Animaciones de aparición suave al hacer scroll
 */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
});