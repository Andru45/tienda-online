document.addEventListener('DOMContentLoaded', () => {
    console.log('App cargada correctamente');

    // Botón de modo oscuro
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            console.log('Modo oscuro activado/desactivado');
        });
    } else {
        console.error('Botón de modo oscuro no encontrado.');
    }

    // Ejemplo de inicialización de carrito
    const cartButton = document.querySelector('.cart-icon');
    if (cartButton) {
        cartButton.addEventListener('click', () => {
            const modal = document.getElementById('cart-modal');
            if (modal) {
                modal.classList.toggle('show');
                console.log('Carrito abierto/cerrado');
            }
        });
    } else {
        console.error('Icono del carrito no encontrado.');
    }

    // Lógica adicional para productos (si es necesario)
    const productContainer = document.getElementById('product-container');
    if (productContainer) {
        console.log('Contenedor de productos encontrado');
        // Aquí puedes cargar dinámicamente productos si lo deseas
    } else {
        console.error('Contenedor de productos no encontrado.');
    }
});
