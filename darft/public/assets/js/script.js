(function () {
  "use strict";

  $(".products-slider").owlCarousel({
    loop: true,
    nav: true,
    items: 3,
    autoplay: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      550: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  let nike = $("#nike-shoes");
  var nikeShoes = [];
  $.getJSON("data.json", function (data) {
    console.log(data)
    nikeShoes = data.filter(function (product) {
        return product.category === "Nike Shoes";
      }).map(function (product) {
        return `<div class="item product-card">
      <div class="image">
        <img
          src=${product.image}
          alt=${product.title}
        />
      </div>
      <div class="content">
        <h3>${product.title}</h3>
        <div class="m-3 starts">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half-alt"></i>
        </div>
        <div class="price">$${product.price}</div>
      </div>
      <div
        class="d-flex flex-column justify-content-center align-items-center info"
      >
        <h4>Product Info</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
          atque aperiam velit explicabo culpa rerum maiores fuga dicta
          quis laborum fugit possimus, aliquid porro quibusdam ducimus
          modi incidunt ullam rem.
        </p>
        <a href="#">
          <button>
            add to cart <i class="fas fa-shopping-cart"></i>
          </button>
        </a>
        <div class="share">
          <a href="#" class="fa fa-facebook-f"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-instagram"></a>
        </div>
      </div>
            </div>`;
      }).join("");
      console.log(nikeShoes)
    nike.html(nikeShoes);
  });
});

// $.getJSON("data.json", function (data) {
//   nikeShoes = data.filter(function (product) {
//       return product.category === "Nike Shoes";
//     }).map(function (product) {
//       return `<div class="item product-card">
//     <div class="image">
//       <img
//         src=${product.image}
//         alt=${product.title}
//       />
//     </div>
//     <div class="content">
//       <h3>${product.title}</h3>
//       <div class="m-3 starts">
//         <i class="fa fa-star"></i>
//         <i class="fa fa-star"></i>
//         <i class="fa fa-star"></i>
//         <i class="fa fa-star"></i>
//         <i class="fa fa-star-half-alt"></i>
//       </div>
//       <div class="price">$${product.price}</div>
//     </div>
//     <div
//       class="d-flex flex-column justify-content-center align-items-center info"
//     >
//       <h4>Product Info</h4>
//       <p>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
//         atque aperiam velit explicabo culpa rerum maiores fuga dicta
//         quis laborum fugit possimus, aliquid porro quibusdam ducimus
//         modi incidunt ullam rem.
//       </p>
//       <a href="#">
//         <button>
//           add to cart <i class="fas fa-shopping-cart"></i>
//         </button>
//       </a>
//       <div class="share">
//         <a href="#" class="fa fa-facebook-f"></a>
//         <a href="#" class="fa fa-twitter"></a>
//         <a href="#" class="fa fa-instagram"></a>
//       </div>
//     </div>
//           </div>`;
//     }).join("");
//   nike.html(nikeShoes);
// });
// });