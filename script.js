// JavaScript functions to handle shopping cart

let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = "";
    let totalPrice = 0;

    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
        totalPrice += item.price;
    });

    const checkoutButton = document.querySelector(".cart-button");
    checkoutButton.textContent = `Checkout - Total: $${totalPrice.toFixed(2)}`;
}

function checkout() {
    alert("Thank you for your purchase!");
    cart = [];
    updateCart();
}
