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

  const aboutServiceSlider = document.querySelector(".s-about-service__slider");

  if (aboutServiceSlider) {
    const swiper = new Swiper(aboutServiceSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 3500,
      },
      navigation: {
        prevEl: ".s-about-service .slider-nav__btn._prev",
        nextEl: ".s-about-service .slider-nav__btn._next",
      },
      pagination: {
        el: ".s-about-service .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });
  }

  const docsSlider = document.querySelector(".s-docs__slider");

  if (docsSlider) {
    const swiper = new Swiper(docsSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 3500,
      },
      navigation: {
        prevEl: ".s-docs .slider-nav__btn._prev",
        nextEl: ".s-docs .slider-nav__btn._next",
      },
      pagination: {
        el: ".s-docs .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  }

  const teamSlider = document.querySelector(".s-team__slider");

  if (teamSlider) {
    const swiper = new Swiper(teamSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 3500,
      },
      navigation: {
        prevEl: ".s-team .slider-nav__btn._prev",
        nextEl: ".s-team .slider-nav__btn._next",
      },
      pagination: {
        el: ".s-team .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }

  const dangerSlider = document.querySelector(".s-danger__slider");

  if (dangerSlider) {
    const swiper = new Swiper(dangerSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 3500,
      },
      navigation: {
        prevEl: ".s-danger .slider-nav__btn._prev",
        nextEl: ".s-danger .slider-nav__btn._next",
      },
      pagination: {
        el: ".s-danger .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  }

  const articlesSlider = document.querySelector(".s-articles__slider");

  if (articlesSlider) {
    const swiper = new Swiper(articlesSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 3500,
      },
      navigation: {
        prevEl: ".s-articles .slider-nav__btn._prev",
        nextEl: ".s-articles .slider-nav__btn._next",
      },
      pagination: {
        el: ".s-articles .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  }

  const infoSlider = document.querySelector(".s-info__slider");

  if (infoSlider) {
    const swiper = new Swiper(infoSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 3500,
      },
      navigation: {
        prevEl: ".s-info .slider-nav__btn._prev",
        nextEl: ".s-info .slider-nav__btn._next",
      },
      pagination: {
        el: ".s-info .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1366: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }

  const historySlide = document.querySelector(".s-history__slider");

  if (historySlide) {
    const swiper = new Swiper(historySlide, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 3500,
      },
      navigation: {
        prevEl: ".s-history .slider-nav__btn._prev",
        nextEl: ".s-history .slider-nav__btn._next",
      },
      pagination: {
        el: ".s-history .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: "auto",
          spaceBetween: 40,
        },
      },
    });
  }

  const gallerySlider = document.querySelector(".s-gallery__slider");

  if (gallerySlider) {
    const swiper = new Swiper(gallerySlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 3500,
      },
      navigation: {
        prevEl: ".s-gallery .slider-nav__btn._prev",
        nextEl: ".s-gallery .slider-nav__btn._next",
      },
      pagination: {
        el: ".s-gallery .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  }
}
