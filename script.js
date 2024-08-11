// Fetching data from Fake Store API
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Error fetching data:', error));

// Fetch and display products
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
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
                        <a href="product.html?id=${product.id}" class="btn btn-primary">View Product</a>
                    </div>
                </div>
            `;

            // Append the product card to the container
            productsContainer.appendChild(productCard);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

    
fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(response => response.json())
    .then(categories => {
        console.log(categories);
    
        
        const categoriesContainer = document.getElementById('categories-container');

        categories.forEach(category => {
            const categoryCard = document.createElement('div');
            categoryCard.classList.add('col-md-3', 'mb-4');

            categoryCard.innerHTML = `
                <div class="card h-100 text-center">
                    <img src="${category.image}" class="card-img-top" alt="${category.title}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${category.title}</h5>
                        <p class="card-text">${category.description.substring(0,100)}...</p>
                        <p class="price text-success">₦${(category.price)}</p>
                        <a href="product.html?category=jewelery" class="btn btn-primary">Shop Now</a>
                    </div>
                </div>
            `;

            categoriesContainer.appendChild(categoryCard);
        });
    })

    .catch(error => console.error('Error fetching categories:', error));


fetch('https://fakestoreapi.com/products/category/electronics')
    .then(response => response.json())
    .then(categories => {
        console.log(categories);
    
        
        const categoriesContainer = document.getElementById('categories-container');

        categories.forEach(category => {
            const categoryCard = document.createElement('div');
            categoryCard.classList.add('col-md-3', 'mb-4');

            categoryCard.innerHTML = `
                <div class="card h-100 text-center">
                    <img src="${category.image}" class="card-img-top" alt="${category.title}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${category.title}</h5>
                        <p class="card-text">${category.description.substring(0,100)}...</p>
                        <p class="price text-success">₦${(category.price)}</p>
                        <a href="product.html?category=${category.id}" class="btn btn-primary">Shop Now</a>
                    </div>
                </div>
            `;

            categoriesContainer.appendChild(categoryCard);
        });
    })

    .catch(error => console.error('Error fetching categories:', error));


fetch("https://fakestoreapi.com/products/category/men's clothing")
    .then(response => response.json())
    .then(categories => {
        console.log(categories);
    
        
        const categoriesContainer = document.getElementById('categories-container');

        categories.forEach(category => {
            const categoryCard = document.createElement('div');
            categoryCard.classList.add('col-md-3', 'mb-4');

            categoryCard.innerHTML = `
                <div class="card h-100 text-center">
                    <img src="${category.image}" class="card-img-top" alt="${category.title}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${category.title}</h5>
                        <p class="card-text">${category.description.substring(0,100)}...</p>
                        <p class="price text-success">₦${(category.price)}</p>
                        <a href="product.html?category=${category.id}" class="btn btn-primary">Shop Now</a>
                    </div>
                </div>
            `;

            categoriesContainer.appendChild(categoryCard);
        });
    })

    .catch(error => console.error('Error fetching categories:', error));

    fetch("https://fakestoreapi.com/products/category/women's clothing")
    .then(response => response.json())
    .then(categories => {
        console.log(categories);
    
        
        const categoriesContainer = document.getElementById('categories-container');

        categories.forEach(category => {
            const categoryCard = document.createElement('div');
            categoryCard.classList.add('col-md-3', 'mb-4');

            categoryCard.innerHTML = `
                <div class="card h-100 text-center">
                    <img src="${category.image}" class="card-img-top" alt="${category.title}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${category.title}</h5>
                        <p class="card-text">${category.description.substring(0,100)}...</p>
                        <p class="price text-success">₦${(category.price)}</p>
                        <a href="product.html?category=${category.id}" class="btn btn-primary">Shop Now</a>
                    </div>
                </div>
            `;

            categoriesContainer.appendChild(categoryCard);
        });
    })

    .catch(error => console.error('Error fetching categories:', error));