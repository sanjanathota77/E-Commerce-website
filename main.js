/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav__menu-toggle"),
navClose = document.getElementById("nav__close");

/*===== Menu Show =====*/
if (navToggle) {
navToggle.addEventListener("click", () => {
navMenu.classList.add("show-menu");
});
}

/*===== Hide Menu =====*/
if (navClose) {
navClose.addEventListener("click", () => {
navMenu.classList.remove("show-menu");
});
}

/*===== Close menu when clicking outside =====*/
document.addEventListener("click", (event) => {
 if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
   navMenu.classList.remove("show-menu");
 }
});

/*=============== IMAGE GALLERY ===============*/
function imgGallery () {
 const mainImg = document.querySelector('.details__img'),
 smallImg = document.querySelectorAll('.details__small-img');

 smallImg.forEach((img) => {
   img.addEventListener('click', function(){
     mainImg.src = this.src;
   })
 })
}

imgGallery ();
/*=============== SWIPER CATEGORIES ===============*/
var swiperCategories = new Swiper(".categories__container", {
   spaceBetween:24,
   loop:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   breakpoints: {
       350: {
        slidesPerView: 2,
        spaceBetween: 24,
       },
       768: {
         slidesPerView: 3,
         spaceBetween: 24,
       },
       1200: {
         slidesPerView: 5,
         spaceBetween: 24,
       },
       1400: {
         slidesPerView: 6,
         spaceBetween: 24,
       },
     },
 });
/*=============== SWIPER PRODUCTS ===============*/
var swiperProducts = new Swiper(".new__container", {
 spaceBetween:24,
 loop:true,
 navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
 },
 breakpoints: {
     768: {
       slidesPerView: 2,
       spaceBetween: 24,
     },
     992: {
       slidesPerView: 3,
       spaceBetween: 24,
     },
     1400: {
       slidesPerView: 4,
       spaceBetween: 24,
     },
   },
});
/*=============== PRODUCTS TABS ===============*/
document.addEventListener("DOMContentLoaded", function () {
   const tabButtons = document.querySelectorAll(".tab__btn");
   const tabItems = document.querySelectorAll(".tab__item");

   tabButtons.forEach((button) => {
       button.addEventListener("click", () => {
           // Remove 'active-tab' class from all buttons
           tabButtons.forEach((btn) => btn.classList.remove("active-tab"));
           // Add 'active-tab' class to clicked button
           button.classList.add("active-tab");

           // Hide all tab content
           tabItems.forEach((item) => item.style.display = "none");

           // Show the clicked tab content
           const target = button.getAttribute("data-target");
           document.querySelector(target).style.display = "block";
       });
   });

   // Default: Show the first tab content
   document.querySelector(".tab__btn.active-tab").click();
});

// ===============CART SYSTEM===============
let cartCount = 0;

document.querySelectorAll('.fi-rs-shopping-bag-add').forEach((bag) => {
 bag.addEventListener('click',function (){
   cartCount++;
   document.getElementById('cart-count').innerHTML = cartCount;
 });
});


// Select all elements with the class 'add-to-cart'
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Attach event listener to each button
addToCartButtons.forEach(button => {
   button.addEventListener('click', () => {
       const productId = button.getAttribute('data-id'); // Assuming product ID is stored in a data attribute
       addToCart(productId);
   });
});

// Example addToCart function
function addToCart(productId) {
   console.log(`Product ${productId} added to cart!`);
   // You can update cart logic here
}
// ===============HEART SYSTEM===============
let heartCount = 0;

document.querySelectorAll('.fi-rs-heart').forEach((heart) => {
 heart.addEventListener('click',function(){
   heartCount++;
   document.getElementById('heart-count').innerHTML = heartCount;
 });
});

// ================REVIEWS=================
function reviews(){
 document.getElementById('info').style.display = 'none';
 document.getElementById('reviews').style.display = 'block';
}

function addInfo(){
 document.getElementById('reviews').style.display = 'none';
 document.getElementById('info').style.display = 'block';
}

// ==================PROFILE=================
document.addEventListener("DOMContentLoaded", () => {
 const tabs = document.querySelectorAll(".account__tab");
 const tabContents = document.querySelectorAll(".tab__content");

 tabs.forEach((tab) => {
   tab.addEventListener("click", () => {
     // Remove active class from all tabs and hide all tab contents
     tabs.forEach((t) => t.classList.remove("active-tab"));
     tabContents.forEach((content) => {
       content.classList.remove("active-tab");
       content.style.display = "none";
     });

     // Add active class to the clicked tab
     tab.classList.add("active-tab");

     // Get the target content and show it
     const target = tab.getAttribute("data-target");
     const activeContent = document.querySelector(target);

     if (activeContent) {
       activeContent.classList.add("active-tab");
       activeContent.style.display = "block";
     }
   });
 });

 // Ensure only the first tab content is visible on page load
 tabContents.forEach((content, index) => {
   content.style.display = index === 0 ? "block" : "none";
 });
});