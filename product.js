// product.js

let allProducts = [];

// Function to get the product ID from the URL
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'), 10);
}

// Fetch all products and display the current product details
function fetchAllProducts(productId) {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            allProducts = data;
            displayProductDetails(productId);
            setupNavigation(productId);
        })
        .catch(error => console.error('Error fetching all products:', error));
}

// Display the current product details
function displayProductDetails(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (product) {
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-price').textContent = `₦${(product.price * 0.85).toFixed(2)}`; 
        document.getElementById('product-image').src = product.image;
    }
}

// Setup the Next and Previous navigation controls
function setupNavigation(productId) {
    const currentIndex = allProducts.findIndex(p => p.id === productId);
    
    const prevButton = document.getElementById('prev-product');
    const nextButton = document.getElementById('next-product');
    
    // Previous product navigation
    if (currentIndex > 0) {
        prevButton.href = `product.html?id=${allProducts[currentIndex - 1].id}`;
    } else {
        prevButton.style.display = 'none';  // Hide if no previous product
    }

    // Next product navigation
    if (currentIndex < allProducts.length - 1) {
        nextButton.href = `product.html?id=${allProducts[currentIndex + 1].id}`;
    } else {
        nextButton.style.display = 'none';  // Hide if no next product
    }
}

// Change the styles for the carousel next/previous buttons
document.querySelector('.carousel-control-prev').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
document.querySelector('.carousel-control-next').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

document.querySelector('.carousel-control-prev-icon').style.filter = 'invert(1)';
document.querySelector('.carousel-control-next-icon').style.filter = 'invert(1)';


// Initialize the product page
const productId = getProductIdFromUrl();
if (productId) {
    fetchAllProducts(productId);
}

    // Initialize the cart as an empty array or retrieve it from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to add a product to the cart
    function addToCart(product) {
        // Check if the product is already in the cart
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
        if (existingProductIndex !== -1) {
            // If product is already in the cart, increase its quantity
            cart[existingProductIndex].quantity += 1;
        } else {
            // If product is not in the cart, add it with quantity 1
            product.quantity = 1;
            cart.push(product);
        }
    
        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    
        // Update the cart icon count
        updateCartCount();
    
        alert('Product added to cart!');
    }
    
    // Function to update the cart icon with the current number of items
    function updateCartCount() {
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        document.getElementById('cart-count').textContent = cartCount;
    }
    
    // Event listener for the "Add to Cart" button
    document.getElementById('add-to-cart-btn').addEventListener('click', function() {
        const productId = getProductIdFromUrl();
        const product = allProducts.find(p => p.id === productId);
        addToCart(product);
    });
    
    // On page load, update the cart count to reflect any items already in the cart
    updateCartCount();


// Get the category from the URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// Debugging: Check if category is correctly extracted from the URL
console.log('Selected category:', category);

// Fetch products based on the category
fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(response => {
        // Debugging: Check if the response is okay
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Debugging: Log the fetched data to ensure it's an array
        console.log('Fetched products:', data);

        if (!Array.isArray(data)) {
            throw new Error('Fetched data is not an array');
        }

        const productsContainer = document.getElementById('products-container');
        
        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('col-md-4', 'mb-4');

            productCard.innerHTML = `
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description.substring(0, 100)}...</p>
                        <p class="price text-success">₦${(product.price)}</p>
                        <a href="product-details.html?id=${product.id}" class="btn btn-primary">View Product</a>
                    </div>
                </div>
            `;

            // Append the product card to the container
            productsContainer.appendChild(productCard);
        });
    })
    .catch(error => {
        console.error('Error fetching products:', error);
        // Optionally, display an error message on the page
    });

