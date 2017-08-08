// Swiper Init
$(document).ready(function () {

  $('.swiper-container').each(function() {
    var container = $(this);
    var slides_per = $(this).attr('data-slides-per');
    var autoplay = $(this).attr('data-autoplay-speed');
    var advance = $(this).attr('data-advance');
    var space_between = (slides_per == 1) ? 0 : 15;
    if (slides_per == 'undefined') slides_per = 2;
    var mySwiper = new Swiper (container, {
      // Optional parameters
      direction: 'horizontal',
      // autoplay isn't working? So, see setInterval function below
      //autoplay: 7000,
      loop: true,
      // Default parameters
        slidesPerView: slides_per,
        spaceBetween: space_between,
        // Responsive breakpoints
        breakpoints: {
          // when window width is <= 320px
          320: {
            slidesPerView: 1
          },
          // when window width is <= 480px
          480: {
            slidesPerView: 1
          },
          // when window width is <= 640px
          640: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 1
          }
        },
      // If we need pagination
      //pagination: '.swiper-pagination',

      // Navigation arrows
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',

      // And if we need scrollbar
      //scrollbar: '.swiper-scrollbar',
    })
    console.log(mySwiper);
    container.find('.product-photo-thumb a').on('click', function(e) {
      e.preventDefault();
      switchImage($(this).attr('href'), null, $('.product-photo-container img')[0]);
    } );


    if (autoplay > 0) {
      setInterval(function(){ 
        mySwiper.slideNext(true);
      }, autoplay)
    }

    if (advance == 'true' && jQuery(window).width() >= 768) {
        if (mySwiper.slideNext) mySwiper.slideNext(true, 0); 
    };
  })

 


  /* Update main product image when a thumbnail is clicked. */
  /*==========================*/


});





