// Example product data
const products = [
    {
        id: 1,
        name: "Product 1",
        description: "Description of Product 1",
        image: "assets/images/product1.jpg",
    },
    {
        id: 2,
        name: "Product 2",
        description: "Description of Product 2",
        image: "assets/images/product2.jpg",
    },
    {
        id: 3,
        name: "Product 3",
        description: "Description of Product 3",
        image: "assets/images/product3.jpg",
    },
];

// Function to render products
function renderProducts() {
    const productsContainer = document.getElementById("products");

    // Clear the container to avoid duplicates
    productsContainer.innerHTML = "";

    // Loop through the products and create HTML for each
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button>Add to Cart</button>
        `;

        productsContainer.appendChild(productCard);
    });
}

// Call the function to render products
renderProducts();