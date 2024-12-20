let cart = [];

function toggleCart() {
    const cartElement = document.getElementById('cart');
    cartElement.classList.toggle('hidden');
}

function openProductPage(name, image, description, price) {
    localStorage.setItem('productDetails', JSON.stringify({ name, image, description, price }));
    window.location.href = 'product.html';
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(itemDiv);
        total += item.price;
    });

    cartTotal.textContent = total;
}

function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    updateCartDisplay();
}
