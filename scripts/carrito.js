// scripts/carrito.js

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Agregar producto al carrito
export function addToCart(id, name, price, image) {
    const existingProduct = cart.find(item => item.id === id);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }
    saveCart();
    updateCartUI();
}

// Eliminar producto del carrito
export function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

// Actualizar interfaz del carrito
export function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                    <p>${item.name}</p>
                    <p>$${item.price} x ${item.quantity}</p>
                </div>
                <span class="remove-btn" onclick="removeFromCart(${item.id})">&times;</span>
            </div>
        `;
    });

    cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartTotal.textContent = total.toFixed(2);
}

// Guardar carrito en localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Mostrar/Ocultar modal del carrito
export function toggleCart() {
    document.getElementById('cart-modal').classList.toggle('active');
}
