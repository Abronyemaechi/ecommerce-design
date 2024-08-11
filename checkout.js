// checkout.js

// Retrieve the cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display the order summary
function displayOrderSummary() {
    const orderSummaryContainer = document.getElementById('order-summary');
    orderSummaryContainer.innerHTML = ''; // Clear previous content

    if (cart.length === 0) {
        orderSummaryContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    let total = 0;

    cart.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'row mb-2';
        orderItem.innerHTML = `
            <div class="col-md-6">
                <h6>${item.title} (x${item.quantity})</h6>
            </div>
            <div class="col-md-6 text-right">
                ₦<span class="item-total">${(item.price * item.quantity * 0.85).toFixed(2)}</span>
            </div>
        `;
        orderSummaryContainer.appendChild(orderItem);

        total += item.price * item.quantity * 0.85;
    });

    document.getElementById('order-total').textContent = total.toFixed(2);
}

// Display the order summary on page load
displayOrderSummary();