// cart.js

// Retrieve the cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous content

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'row mb-4';
        cartItem.innerHTML = `
            <div class="col-md-2">
                <img src="${item.image}" class="img-fluid" alt="${item.title}">
            </div>
            <div class="col-md-4">
                <h5>${item.title}</h5>
                <p>Price: ₦${(item.price * 0.85).toFixed(2)}</p>
            </div>
            <div class="col-md-3">
                <input type="number" class="form-control quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
            </div>
            <div class="col-md-2">
                <button class="btn btn-danger remove-item" data-id="${item.id}">Remove</button>
            </div>
            <div class="col-md-1">
                <p>Total: ₦<span class="item-total">${(item.price * item.quantity * 0.85).toFixed(2)}</span></p>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    updateSubtotal();
}

// Function to update the subtotal
function updateSubtotal() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity * 0.85), 0);
    document.getElementById('cart-subtotal').textContent = subtotal.toFixed(2);
}

// Event listener for quantity changes
document.addEventListener('change', function(event) {
    if (event.target.classList.contains('quantity-input')) {
        const productId = parseInt(event.target.getAttribute('data-id'), 10);
        const newQuantity = parseInt(event.target.value, 10);

        // Update the cart with the new quantity
        const productIndex = cart.findIndex(item => item.id === productId);
        cart[productIndex].quantity = newQuantity;

        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update the total for the item and the subtotal
        displayCartItems();
    }
});

// Event listener for removing items from the cart
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-item')) {
        const productId = parseInt(event.target.getAttribute('data-id'), 10);

        // Remove the item from the cart
        cart = cart.filter(item => item.id !== productId);

        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Redisplay the cart items
        displayCartItems();
    }
});

// Display the cart items on page load
displayCartItems();