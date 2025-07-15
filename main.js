let quantity = 1;
const basePrice = 600.72;

const quantitySpan = document.getElementById("quantity");
const priceElement = document.getElementById("price");

document.getElementById("plus").onclick = () => {
    quantity++;
    updateDisplay();
};

document.getElementById("minus").onclick = () => {
    if (quantity > 1) {
        quantity--;
        updateDisplay();
    }
};

function updateDisplay() {
    quantitySpan.textContent = quantity;
    priceElement.textContent = `$${(basePrice * quantity).toFixed(2)}`;
}
