// Now, CLASSES- Data changes, but not the structure - a BLUEPRINT.
// We BUILD objects{ } based on CLASSES.

class Product {
  // title = "DEFAULT";
  // imageUrl;
  // desc;
  // price;
  constructor(title, img, desc, price) {
    this.title = title;
    this.imageUrl = img;
    this.desc = desc;
    this.price = price;
  }
}

console.log(new Product());

const productList = {
  products: [
    new Product(
      "Pillow Set",
      "https://bertman.nu/cdn/shop/products/85420-9ce8c637bc9a40869a4ca0ca03d8239b_900x.jpg?v=1548751131",
      "A set of soft pillows!",
      39.99
    ),
    new Product(
      "A Carpet",
      "https://bertman.nu/cdn/shop/products/85420-9ce8c637bc9a40869a4ca0ca03d8239b_900x.jpg?v=1548751131",
      "A carpet which you might like",
      49.66
    ),
    new Product(
      "A Lamp",
      "https://cdn11.bigcommerce.com/s-hi9nbuups9/images/stencil/1280x1280/products/8364/35732/bb1239cb2ed70f0f15306f079300ca182772a84c_chaplins_moooi_non_random_pendant_lamp_5__56377.1637700337.jpg?c=1",
      "Beautiful pendant-styled lamp",
      12.99
    ),
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
        <img src="${prod.imageUrl}" alt="${prod.title}"/>
        <div class="product-item__content">
        <h2>${prod.title}</h2>
        <h3>\$${prod.price}</h3>
        <p>${prod.desc}</p>
        <button>Add To Cart</button>
        </div>
        </div>
        `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
