const productsContainer = document.getElementById("products-list");

async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    renderProducts(products);
  } catch (err) {
    console.error("Failed to get products:", err);
    productsContainer.innerHTML = "<p>Failed to load products</p>";
  }
}

function renderProducts(products) {
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;

    const title = document.createElement("h2");
    title.className = "product-title";
    title.textContent = product.title;

    const price = document.createElement("h4");
    price.className = "product-price";
    price.textContent = `$${product.price.toFixed(2)}`;

    const btn = document.createElement("button");
    btn.className = "btn btn-primary";
    btn.textContent = "Add to cart";

    btn.addEventListener("click", () => {
      window.dispatchEvent(
        new CustomEvent("add-to-cart", {
          detail: {
            id: product.id,
            title: product.title,
            price: product.price,
          },
        })
      );
    });

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(btn);

    productsContainer.appendChild(card);
  });
}

fetchProducts();
