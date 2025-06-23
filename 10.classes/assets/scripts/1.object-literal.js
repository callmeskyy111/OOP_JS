// First, object-literal{} notation
// CONS: Non-reusable

const productList = {
  products: [
    {
      title: "Pillow Set",
      imageUrl:
        "https://bertman.nu/cdn/shop/products/85420-9ce8c637bc9a40869a4ca0ca03d8239b_900x.jpg?v=1548751131",
      price: 39.99,
      desc: "A set of soft pillows!",
    },
    {
      title: "A Carpet",
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2023/9/345634898/DY/BF/DU/152096020/random-design-acrylic-room-printed-carpet-1000x1000.jpeg",
      price: 49.66,
      desc: "A carpet which you might like",
    },
    {
      title: "A Lamp",
      imageUrl:
        "https://cdn11.bigcommerce.com/s-hi9nbuups9/images/stencil/1280x1280/products/8364/35732/bb1239cb2ed70f0f15306f079300ca182772a84c_chaplins_moooi_non_random_pendant_lamp_5__56377.1637700337.jpg?c=1",
      price: 12.99,
      desc: "Beautiful pendant-styled lamp",
    },
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
