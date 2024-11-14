const buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.getAttribute("data-product");
    console.log(`${productName} został dodany do koszyka.`);
  });
});
