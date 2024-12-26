// scripts/ui.js

// Animaciones de carga inicial
export function initAnimations() {
    const hero = document.querySelector('.hero');
    hero.classList.add('animate-hero');

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate-card');
        }, index * 200); // Retardo en cascada
    });
}

// Mostrar notificaciones
export function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000); // Desaparece después de 3 segundos
}
// scripts/ui.js

// Alternar el modo oscuro
export function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Guardar la preferencia del modo oscuro en localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
}

// Cargar la preferencia del modo oscuro al iniciar
export function loadDarkModePreference() {
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
}

// Vincular el evento al botón al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    // Aplicar preferencia de modo oscuro
    loadDarkModePreference();
});
