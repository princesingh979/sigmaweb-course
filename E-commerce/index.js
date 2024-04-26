// Sample product data
const products = [
    { id: 1, name: "Camera", price: 1000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeCNiA5U9QFrPLpWfoYvodSD0P4zkk-tsM35E1g0oiQQ&s" },
    { id: 2, name: "Phone", price: 900, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwy6cwXqgaUJjlOiIhCPpTX6FGVnuN_lZmYYKwNmy5Dw&s" },
    { id: 3, name: "Laptop", price: 950, image: "https://www.shutterstock.com/image-photo/bangkok-thailand-hp-launch-new-260nw-2126914553.jpg" },
    // Add more products as needed
];

// Generate product listing
const productList = document.getElementById("product-list");
products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product");
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productCard);
});

// Function to add product to cart
function addToCart(productId) {
    // Implement your logic to add product to cart
    alert(`Product ${productId} added to cart`);
}
