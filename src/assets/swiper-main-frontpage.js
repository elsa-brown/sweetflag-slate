// Swiper Init
$(document).ready(function () {
var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: 7000,
  // Default parameters
  slidesPerView: 1,
  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 320px
    320: {
      
    },
    // when window width is <= 480px
    480: {

    },
    // when window width is <= 640px
    640: {

    },
    768: {

    }
  },

  // If we need pagination
  //pagination: '.swiper-pagination',

  // Navigation arrows
  nextButton: '.swiper-button-next-front',
  prevButton: '.swiper-button-prev-front',

  // And if we need scrollbar
  //scrollbar: '.swiper-scrollbar',
})
  });
