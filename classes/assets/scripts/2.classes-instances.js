// Now, CLASSES- Data changes, but not the structure - a BLUEPRINT.
// We BUILD objects{ } based on CLASSES.
// Order of the classes/class-methods() don't matter. JS reads/parses everything properly.

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

//console.log(new Product());

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
        <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}"/>
        <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>\$${this.product.price}</h3>
        <p>${this.product.desc}</p>
        <button>Add To Cart</button>
        </div>
        </div>
        `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this)); //Binding it, to fix UNDEFINED
    return prodEl;
  }
}

class ShoppingCart {
  items = [];
  set cartItems(val) {
    this.items = val;
    this.totalOutput.innerHTML = `  <h2>Total :\$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }
  get totalAmount() {
    const sum = this.items.reduce((prevVal, currItem) => {
      return prevVal + currItem.price;
    }, 0);
    return sum;
  }
  addProduct(product) {
    this.items.push(product);
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }
  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
    <h2>Total :\$${0}</h2>
    <button>Order Now!</button>
    `;
    cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector("h2");
    return cartEl;
  }
}

class ProductList {
  products = [
    new Product(
      "Pillow Set",
      "https://bertman.nu/cdn/shop/products/85420-9ce8c637bc9a40869a4ca0ca03d8239b_900x.jpg?v=1548751131",
      "A set of soft pillows!",
      39.99
    ),
    new Product(
      "A Carpet",
      "https://5.imimg.com/data5/SELLER/Default/2023/9/345634898/DY/BF/DU/152096020/random-design-acrylic-room-printed-carpet-1000x1000.jpeg",
      "A carpet which you might like",
      49.66
    ),
    new Product(
      "A Lamp",
      "https://cdn11.bigcommerce.com/s-hi9nbuups9/images/stencil/1280x1280/products/8364/35732/bb1239cb2ed70f0f15306f079300ca182772a84c_chaplins_moooi_non_random_pendant_lamp_5__56377.1637700337.jpg?c=1",
      "Beautiful pendant-styled lamp",
      12.99
    ),
  ];
  constructor() {}
  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const product = new ProductItem(prod);
      const prodEl = product.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");
    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

// Static Methods & Properties
class App {
  static cart; //good practice

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
