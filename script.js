/**
 * Menú Móvil
 */
function toggleMenu() {
    const menu = document.getElementById('nav-links');
    const icon = document.getElementById('menu-icon');
    
    menu.classList.toggle('active');
    
    if (menu.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
}

/**
 * Rotación del Engranaje con el Scroll
 */
window.addEventListener('scroll', () => {
    const theta = (window.pageYOffset / 10) % 360;
    const wheel = document.getElementById('scrollWheel');
    if (wheel) {
        wheel.style.transform = `rotate(${theta}deg)`;
    }
});

/**
 * Animaciones de entrada (Scroll Reveal)
 */
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section, .service-card').forEach(el => {
    el.classList.add('reveal-hidden');
    observer.observe(el);
});

// Añade estas clases dinámicamente vía CSS para el efecto reveal
const style = document.createElement('style');
style.textContent = `
    .reveal-hidden {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
    }
    .reveal-visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);