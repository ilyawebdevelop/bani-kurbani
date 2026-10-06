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