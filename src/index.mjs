const cart = [];

const addToCartButtons = document.querySelectorAll("add-to-cart");
addToCartButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const productName = button.parentElement.querySelector("h2").textContent;
    const productPrice = button.parentElement.querySelector("p").textContent;

    cart.push({ name: productName, price: productPrice });
    console.log(cart);
    alert("${productName} is added to your cart");
  });
});
