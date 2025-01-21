import '../stylesheets/00_Swiper.css'

const swiper = new Swiper('.swiper', {
  // Optional parameters
  //   direction: 'vertical',
  loop: true,

  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',

  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
})
