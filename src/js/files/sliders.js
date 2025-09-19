export default function sliders() {
  const heroSlider = document.querySelector(".s-hero__slider");

  if (heroSlider) {
    const swiper = new Swiper(heroSlider, {
      speed: 900,
      autoplay: {
        delay: 3500
      },
      navigation: {
        prevEl: ".s-hero__slider-btn._prev",
        nextEl: ".s-hero__slider-btn._next",
      },
      pagination: {
        el: ".s-hero__slider-pagination",
        clickable: true
      }
    })
  }
}