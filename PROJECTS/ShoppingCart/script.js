document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMesssage = document.getElementById("empty-cart");
    const cartTotal = document.getElementById("cart-total");
    const totalPrice = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");
  
    const products = [
      { id: 1, name: "Product 1", price: 19.99 },
      { id: 2, name: "Product 2", price: 12.99 },
      { id: 3, name: "Product 3", price: 29.99 },
    ];
  
    let Cart = JSON.parse(localStorage.getItem("storedProducts")) || [];
  
    // Save the cart to local storage
    function saveCart() {
      localStorage.setItem("storedProducts", JSON.stringify(Cart));
    }
  
    // Render product list
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id="${product.id}">Add to cart</button>
      `;
      productDiv.classList.add("product");
      productList.appendChild(productDiv);
    });
  
    // Add product to cart
    productList.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const productId = parseInt(e.target.getAttribute("data-id"), 10); // Correctly retrieve the data-id
        const product = products.find((p) => p.id === productId);
  
        if (product) {
          addToCart(product);
          renderCart();
        }
      }
    });
  
    // Add product to cart array
    function addToCart(product) {
      Cart.push(product);
      saveCart(); // Save updated cart to local storage
    }
  
    // Render cart
    function renderCart() {
      cartItems.innerHTML = ""; // Clear current cart items
      if (Cart.length > 0) {
        emptyCartMesssage.classList.add("hidden"); // Hide empty cart message
        cartTotal.classList.remove("hidden"); // Show cart total
  
        let total = 0;
  
        // Display each item in the cart
        Cart.forEach((product, index) => {
          const cartItem = document.createElement("div");
          cartItem.classList.add("cart-item");
          cartItem.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button class="removeBtn" data-index="${index}">Remove</button>
          `;
          cartItems.appendChild(cartItem);
          total += product.price;
        });
  
        // Update total price
        totalPrice.textContent = `$${total.toFixed(2)}`;
      } else {
        emptyCartMesssage.classList.remove("hidden"); // Show empty cart message
        cartTotal.classList.add("hidden"); // Hide cart total
      }
    }
  
    // Event listener for remove buttons
    cartItems.addEventListener("click", (e) => {
      if (e.target.classList.contains("removeBtn")) {
        const productIndex = parseInt(e.target.getAttribute("data-index"), 10);
        Cart.splice(productIndex, 1); // Remove product from cart array
        saveCart(); // Save updated cart to local storage
        renderCart(); // Re-render the cart
      }
    });
  
    // Checkout button
    checkoutBtn.addEventListener("click", () => {
        cartItems.classList.add("hidden")
        cartTotal.classList.toggle("hidden")
        if (Cart.length > 0) {
            alert(`Your total is ${totalPrice.textContent}`);
            Cart = []; // Clear the Cart array
            saveCart(); // Clear the cart in local storage
            renderCart(); // Re-render the cart to reflect the changes
        } else {
            alert("Your cart is already empty!");
        }
    });
  
    // Populate the cart on page load
    renderCart();
  });
  