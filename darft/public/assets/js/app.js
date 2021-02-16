$(function () {
  "use strict";
  /* search bar */
  $("#search-bar, .fa-search").mouseenter(function () {
    console.log("jgspapoapsdapo");
    $(".logo").hide();
  });

  $("#search-bar, .fa-search").mouseleave(function () {
    console.log("jgspapoapsdapo");
    $(".logo").show();
  });

  /* sidebar */
  $(".fa-bars").click(function () {
    $(".navbar").toggle();
    $(this).toggleClass("fa-times");
  });
  $(".navbar, .navbar a").click(function () {
    $(".navbar").hide();
    $(".fa-bars").removeClass("fa-times");
  });

  /* fixed scroll navbar */
  $(window).on("scroll load", function () {
    if ($(window).scrollTop() > 20) {
      $("#header").css({
        background: "#eb4b4d",
        "box-shadow": "0 0.1rem 0.3rem #000",
      });
    } else {
      $("#header").css({
        background: "#333",
        "box-shadow": "none",
      });
    }
  });
  /* home slider */
  $(".home-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    autoplay: true,
  });

  /* products slider */
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

  /* testmonials slider */
  $(".reviews-slider").owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    autoplay: true,
  });

  $.getJSON("products.json", function (data) {
    console.log(data);
    let products = $.map(data, function (product) {
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
    }).join(", ");
    console.log(products);
    $('#all-products').html(products);
  });
});
