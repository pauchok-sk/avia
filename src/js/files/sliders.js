export default function sliders() {
  const heroSlider = document.querySelector(".s-hero__slider");

  if (heroSlider) {
    const swiper = new Swiper(heroSlider, {
      speed: 900,
      autoplay: {
        delay: 3500,
      },
      navigation: {
        prevEl: ".s-hero__slider-btn._prev",
        nextEl: ".s-hero__slider-btn._next",
      },
      pagination: {
        el: ".s-hero__slider-pagination",
        clickable: true,
      },
    });
  }

  const advSlider = document.querySelector(".s-adv__slider");

  if (advSlider) {
    const swiper = new Swiper(advSlider, {
      speed: 900,
      slidesPerView: "auto",
      autoplay: {
        delay: 3200,
      },
      navigation: {
        prevEl: ".s-adv .slider-nav__btn._prev",
        nextEl: ".s-adv .slider-nav__btn._next",
      },
      pagination: {
        el: ".s-adv .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1366: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 3,
        },
      },
    });
  }

  const servicesSlider = document.querySelector(".s-services__slider");

  if (servicesSlider) {
    const swiper = new Swiper(servicesSlider, {
      speed: 900,
      slidesPerView: "auto",
      autoplay: {
        delay: 3500,
      },
      navigation: {
        prevEl: ".s-services .slider-nav__btn._prev",
        nextEl: ".s-services .slider-nav__btn._next",
      },
      pagination: {
        el: ".s-services .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
      },
    });
  }

  const partnersSlider = document.querySelector(".s-partners__slider");

  if (partnersSlider) {
    const initialSlide = Math.round(
      partnersSlider.querySelectorAll(".swiper-slide").length / 2
    );

    const swiper = new Swiper(partnersSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 20,
      centeredSlides: true,
      initialSlide: initialSlide,
      autoplay: {
        delay: 3200,
      },
    });
  }

  const stepsSlider = document.querySelector(".s-steps__slider");

  if (stepsSlider) {
    const swiper = new Swiper(stepsSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 25,
      autoplay: {
        delay: 3500,
      },
      navigation: {
        prevEl: ".s-steps .slider-nav__btn._prev",
        nextEl: ".s-steps .slider-nav__btn._next",
      },
      pagination: {
        el: ".s-steps .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }
}
