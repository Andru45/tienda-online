// scripts/main.js

import { renderCatalog } from './catalogo.js';
import { addToCart, removeFromCart, updateCartUI, toggleCart } from './carrito.js';

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar el catálogo completo al inicio
    renderCatalog('product-container');

    // Actualizar carrito si ya tiene productos
    updateCartUI();

    // Manejo de filtros
    const filterBtn = document.getElementById('filter-btn');
    filterBtn.addEventListener('click', () => {
        const minPrice = parseInt(document.getElementById('min-price').value) || 0;
        const maxPrice = parseInt(document.getElementById('max-price').value) || Infinity;
        renderCatalog('product-container', minPrice, maxPrice);
    });
});

// Exponer funciones globalmente
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.toggleCart = toggleCart;
