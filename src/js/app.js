import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

$(window).on("load", function () {
  $("video.introVideo").each(function () {
    var video = $(this);
    video[0].play();
  });
});

// Инициализация слайдера includeSlider
document.querySelectorAll('.includeSlider').forEach(n => {
  const mySwiperInclude = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 600,
    autoplay: true,
    navigation: {
      nextEl: n.closest('.swiperW')?.querySelector('.navArrowNext'),
      prevEl: n.closest('.swiperW')?.querySelector('.navArrowPrev'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
});

// Инициализация слайдера galSlider
document.querySelectorAll('.galSlider').forEach(n => {
  const mySwiperGal = new Swiper(n, {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 600,
    autoplay: false,
    navigation: {
      nextEl: n.closest('.swiperW')?.querySelector('.navArrowNext'),
      prevEl: n.closest('.swiperW')?.querySelector('.navArrowPrev'),
    },
  });
});

// Tabs

(function () {
  // Находим все независимые блоки табов на странице
  var containers = document.querySelectorAll('.wp-tabs');

  containers.forEach(function (container) {
    var buttons = container.querySelectorAll('.wp-tabs__btn');
    var panels = container.querySelectorAll('.wp-tabs__panel');

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var index = btn.getAttribute('data-index');

        buttons.forEach(function (b) { b.classList.remove('active'); });
        panels.forEach(function (p) { p.classList.remove('active'); });

        btn.classList.add('active');
        container.querySelector('.wp-tabs__panel[data-index="' + index + '"]').classList.add('active');
      });
    });
  });
})();