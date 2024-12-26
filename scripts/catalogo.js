// scripts/catalogo.js

export const products = [
    { id: 1, name: 'Producto A', price: 100, image: 'https://via.placeholder.com/300x200' },
    { id: 2, name: 'Producto B', price: 150, image: 'https://via.placeholder.com/300x200' },
    { id: 3, name: 'Producto C', price: 200, image: 'https://via.placeholder.com/300x200' },
    { id: 4, name: 'Producto D', price: 300, image: 'https://via.placeholder.com/300x200' },
    { id: 5, name: 'Producto E', price: 400, image: 'https://via.placeholder.com/300x200' },
];

// Renderizar catálogo con filtro
export function renderCatalog(containerId, minPrice = 0, maxPrice = Infinity) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Limpiar contenido anterior

    products
        .filter(product => product.price >= minPrice && product.price <= maxPrice)
        .forEach(product => {
            const card = `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$${product.price}</p>
                    <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">
                        Agregar al carrito
                    </button>
                </div>`;
            container.innerHTML += card;
        });
}
