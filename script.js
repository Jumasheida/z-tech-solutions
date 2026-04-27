
const allProducts = [
    { id: 1, name: "HP EliteBook 840", price: 65000, category: "Laptop", image: "hp.jpg" },
    { id: 2, name: "Logitech Wireless Mouse", price: 3500, category: "Accessory", image: "mouse.jpg" },
    { id: 3, name: "Dell Latitude 7490", price: 55000, category: "Laptop", image: "dell.jpg" },
    { id: 4, name: "Mechanical Keyboard", price: 8500, category: "Accessory", image: "kb.jpg" }
];

let cart = [];

function showPage(pageName) {
    const main = document.getElementById('main-content');
    
    if (pageName === 'home') {
        main.innerHTML = `
            <section class="hero">
                <h1>Tech Solutions for the Modern World</h1>
                <p>Explore our range of Laptops and Premium Accessories.</p>
                <button class="buy-btn" onclick="showPage('products')">Start Shopping</button>
            </section>
        `;
    } 
    
    else if (pageName === 'products') {
        main.innerHTML = `
            <div class="shop-controls">
                <h2>Our Collection</h2>
                <input type="text" id="searchBar" onkeyup="filterProducts()" placeholder="Search laptops or accessories...">
            </div>
            <div id="product-container" class="products-grid"></div>
        `;
        renderProducts(allProducts);
    } 
    
    else if (pageName === 'cart') {
        renderCart();
    }

    else if (pageName === 'about') {
    main.innerHTML = `
        <section class="info-page">
            <h1>About Z-Tech</h1>
            <p>Founded by ICT professionals, Z-Tech is dedicated to delivering 
            cutting-edge technology solutions across East Africa.</p>
            <div class="values">
                <div class="card"><h3>Quality</h3><p>We only stock high-performance, verified hardware.</p></div>
                <div class="card"><h3>Support</h3><p>Lifetime technical advice for every purchase.</p></div>
            </div>
        </section>`;
}

else if (pageName === 'careers') {
    main.innerHTML = `
        <section class="info-page">
            <h1>Join the Team</h1>
            <p>We are always looking for Kenyan tech talent.</p>
            <div class="job-card">
                <h3>Technical Sales Intern</h3>
                <p>Location: Nairobi | Type: Full-time</p>
                <button class="buy-btn">Apply Now</button>
            </div>
        </section>`;
}
else if (pageName === 'blog') {
    main.innerHTML = `
        <section class="info-page">
            <h1>Z-Tech Insights</h1>
            <div class="blog-grid">
                <div class="blog-post">
                    <h3>Choosing the Right Laptop for Coding</h3>
                    <p>Read our guide on RAM, CPU, and storage requirements...</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </section>`;
}

else if (pageName === 'faq') {
    main.innerHTML = `
        <div class="info-page">
            <h2>Frequently Asked Questions</h2>
            <div class="accordion">
                <div class="faq-item">
                    <h4>Do you deliver to Mombasa/Kisumu?</h4>
                    <p>Yes, we deliver nationwide within 24 hours via reliable couriers.</p>
                </div>
                <div class="faq-item">
                    <h4>What payment methods do you accept?</h4>
                    <p>We accept M-Pesa Till, Bank Transfers, and Cash on Delivery within Nairobi.</p>
                </div>
            </div>
        </div>`;
}
else if (pageName === 'warranty') {
    main.innerHTML = `
        <div class="info-page">
            <h2>Warranty Policy</h2>
            <p>At Z-Tech, we stand by our quality. All laptops undergo a 20-point inspection.</p>
            <ul>
                <li>6-Month Technical Warranty on all Refurbished Laptops.</li>
                <li>1-Year Manufacturer Warranty on all New Laptops.</li>
                <li>Free OS installation for the first 3 months.</li>
            </ul>
        </div>`;
}
else if (pageName === 'track') {
    main.innerHTML = `
        <div class="info-page">
            <h2>Track Your Order</h2>
            <p>Enter your Order ID or Phone Number to check status.</p>
            <div class="search-box">
                <input type="text" placeholder="e.g. ZT-9902" id="orderId">
                <button class="buy-btn" onclick="alert('Checking status...')">Track</button>
            </div>
        </div>`;
}

}

function renderProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = products.map(item => `
        <div class="product-card">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p><strong>${item.category}</strong></p>
            <p>KES ${item.price.toLocaleString()}</p>
            <button class="buy-btn" onclick="addToCart(${item.id})">Add to Cart</button>
        </div>
    `).join('');
}

function addToCart(id) {
    const item = allProducts.find(p => p.id === id);
    cart.push(item);
    document.getElementById('cart-count').innerText = cart.length;
    alert(`${item.name} added to cart!`);
}


window.onload = () => showPage('home');
