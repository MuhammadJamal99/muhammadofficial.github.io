const allProducts = async () => {
  try {
    const results = await fetch("./products.json");
    const data = await results.json();
    const products = data.products;
    return products;
  } catch (err) {
    console.log(err);
  }
};

  /*
  =============
  Load Category Products
  =============
   */
  const allProductsContent = document.querySelector(".all-products-content");
  
  window.addEventListener("DOMContentLoaded", async function () {
    const products = await allProducts();
    displayProductItems(products);
  });
  
  const displayProductItems = items => {
    let displayProduct = items.map(
      product =>`<div class="position-relative text-center d-flex flex-column product category-products">
                    <!-- start product header -->
                    <div class="product-header">
                        <img src=${product.image} class="img-fluid mh-100" alt="product">
                    </div>
                    <!-- end product header -->

                    <!-- start product footer -->
                    <div class="text-center d-flex flex-column justify-content-center align-items-center py-3 px-0 product-footer">
                        <h3>${product.title}</h3>
                        <div class="rating-container d-flex align-items-center justify-content-center">
                            <input type="radio" name="rate" id="radio-5" class="d-none">
                            <label for="radio-5" class="fas fa-star mx-2"></label>
                            <input type="radio" name="rate" id="radio-4" class="d-none">
                            <label for="radio-4" class="fas fa-star mx-2"></label>
                            <input type="radio" name="rate" id="radio-3" class="d-none">
                            <label for="radio-3" class="fas fa-star mx-2"></label>
                            <input type="radio" name="rate" id="radio-2" class="d-none">
                            <label for="radio-2" class="fas fa-star mx-2"></label>
                            <input type="radio" name="rate" id="radio-1" class="d-none">
                            <label for="radio-1" class="fas fa-star"></label>
                        </div>
                        <div class="product-price">
                            <h4 class="h2">$${product.price}</h4>
                        </div>
                        <button type="button" class="d-inline-block text-uppercase black1-color w-100 py-4 px-0 product-btn">Add To Cart</button>
                        <!-- start add to favourit -->
                        <ul class="list-unstyled d-flex justify-content-center align-items-center">
                            <li class="mr-3">
                                <a href="#" class="d-flex justify-content-center align-items-center">
                                    <i class="first-color far fa-eye"></i>
                                </a>
                            </li>
                            <li class="mr-3">
                                <a href="#" class="d-flex justify-content-center align-items-center">
                                    <i class="first-color far fa-eye"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="d-flex justify-content-center align-items-center">
                                    <i class="first-color far fa-heart"></i>
                                </a>
                            </li>
                        </ul>
                        <!-- end add to favourit -->
                    </div>
                    <!-- end product footer -->
                </div>
                `
    );
  
    displayProduct = displayProduct.join("");
    if (allProductsContent) {
      allProductsContent.innerHTML = displayProduct;
    }
  };
  
/*
=============
Filtering
=============
 */
const filterBtn = document.querySelectorAll(".filter-btn");
const categoryContainer = document.getElementById("category");
if (categoryContainer) {
  categoryContainer.addEventListener("click", async e => {
    const target = e.target.closest(".section-title");
    if (!target) return;

    const id = target.dataset.id;
    const products = await allProducts();

    if (id) {
      // remove active from buttons
      Array.from(filterBtn).forEach(btn => {
        btn.classList.remove("active");
      });
      target.classList.add("active");

      // Load Products
      let menuCategory = products.filter(product => {
        if (product.category === id) {
          return product;
        }
      });

      if (id === "All Products") {
        displayProductItems(products);
      } else {
        displayProductItems(menuCategory);
      }
    }
  });
}

/*
=============
Product Details Left
=============
 */
const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const pic5 = document.getElementById("pic5");
const picContainer = document.querySelector(".product__pictures");
const zoom = document.getElementById("zoom");
const pic = document.getElementById("pic");

// Picture List
const picList = [pic1, pic2, pic3, pic4, pic5];

// Active Picture
let picActive = 1;

["mouseover", "touchstart"].forEach(event => {
  if (picContainer) {
    picContainer.addEventListener(event, e => {
      const target = e.target.closest("img");
      if (!target) return;
      const id = target.id.slice(3);
      changeImage(`../images/products/iPhone/iphone${id}.jpeg`, id);
    });
  }
});

// change active imag
const changeImage = (imgSrc, n) => {
  // change the main image
  pic.src = imgSrc;
  // change the background-image
  zoom.style.backgrou
ndImage = `url(${imgSrc})`;
  //   remove the border from the previous active side image
  picList[picActive - 1].classList.remove("img-active");
  // add to the active image
  picList[n - 1].classList.add("img-active");
  //   update the active side picture
  picActive = n;
};

/*
=============
Product Details Bottom
=============
 */

const btns = document.querySelectorAll(".detail-btn");
const detail = document.querySelector(".product-detail__bottom");
const contents = document.querySelectorAll(".content");

if (detail) {
  detail.addEventListener("click", e => {
    const target = e.target.closest(".detail-btn");
    if (!target) return;

    const id = target.dataset.id;
    if (id) {
      Array.from(btns).forEach(btn => {
        // remove active from all btn
        btn.classList.remove("active");
        e.target.closest(".detail-btn").classList.add("active");
      });
      // hide other active
      Array.from(contents).forEach(content => {
        content.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}



