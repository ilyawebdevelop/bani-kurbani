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

// Инициализация слайдера galSectSlider
document.querySelectorAll('.galSectSlider').forEach(n => {
  const totalSlides = n.querySelectorAll('.swiper-slide').length;
  const mySwiperGalSect = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 600,
    autoplay: false,
    watchSlidesProgress: true,
    // Навигация кнопками (уже у вас есть)
    navigation: {
      nextEl: n.closest('.swiperW')?.querySelector('.navArrowNext'),
      prevEl: n.closest('.swiperW')?.querySelector('.navArrowPrev'),
    },

    // Добавляем каунтер формата "1/12"
    pagination: {
      el: n.closest('.swiperW')?.querySelector('.galSect-pagination'),
      type: 'fraction', // Формат отображения дроби
      renderCustom: function (swiper, current, total) {
        // Инициализируем базовый вид при первой загрузке
        return `<span class="swiper-pagination-current">${current}</span>/<span class="swiper-pagination-total">${totalSlides}</span>`;
      }
    },

    // Добавляем нижний скроллбар
    scrollbar: {
      el: n.closest('.swiperW')?.querySelector('.galSectNav .galSect-scrollbar'),
      draggable: true, // Позволяет перетаскивать ползунок мышкой
    },
    on: {
      // Срабатывает СРАЗУ при загрузке страницы
      init: function () {
        const paginationEl = n.closest('.swiperW')?.querySelector('.galSect-pagination');
        if (paginationEl) {
          const currentSlide = this.realIndex + 1;
          paginationEl.innerHTML = `<span class="swiper-pagination-current">${currentSlide}</span>/<span class="swiper-pagination-total">${totalSlides}</span>`;
        }
      },
      // Срабатывает при каждом перелистывании
      slideChange: function () {
        const paginationEl = n.closest('.swiperW')?.querySelector('.galSect-pagination');
        if (paginationEl) {
          const currentSlide = this.realIndex + 1;
          paginationEl.innerHTML = `<span class="swiper-pagination-current">${currentSlide}</span>/<span class="swiper-pagination-total">${totalSlides}</span>`;
        }
      }
    }
  });
});

// Инициализация слайдера productSlider
document.querySelectorAll('.productSlider').forEach(n => {
  const mySwiperProduct = new Swiper(n, {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 600,
    autoplay: false,
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
        slidesPerView: 3,
      },
    },
  });
});

// Инициализация слайдера teamSlider
document.querySelectorAll('.teamSlider').forEach(n => {
  const totalSlides = n.querySelectorAll('.swiper-slide').length;
  const mySwiperTeam = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 600,
    autoplay: false,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    // Навигация кнопками (уже у вас есть)
    navigation: {
      nextEl: n.closest('.swiperW')?.querySelector('.navArrowNext'),
      prevEl: n.closest('.swiperW')?.querySelector('.navArrowPrev'),
    },

    // Добавляем каунтер формата "1/12"
    pagination: {
      el: n.closest('.swiperW')?.querySelector('.team-pagination'),
      type: 'fraction', // Формат отображения дроби
      renderCustom: function (swiper, current, total) {
        // Инициализируем базовый вид при первой загрузке
        return `<span class="swiper-pagination-current">${current}</span>/<span class="swiper-pagination-total">${totalSlides}</span>`;
      }
    },

    // Добавляем нижний скроллбар
    scrollbar: {
      el: n.closest('.swiperW')?.querySelector('.teamNav .team-scrollbar'),
      draggable: true, // Позволяет перетаскивать ползунок мышкой
    },
    on: {
      // Срабатывает СРАЗУ при загрузке страницы
      init: function () {
        const paginationEl = n.closest('.swiperW')?.querySelector('.team-pagination');
        if (paginationEl) {
          const currentSlide = this.realIndex + 1;
          paginationEl.innerHTML = `<span class="swiper-pagination-current">${currentSlide}</span>/<span class="swiper-pagination-total">${totalSlides}</span>`;
        }
      },
      // Срабатывает при каждом перелистывании
      slideChange: function () {
        const paginationEl = n.closest('.swiperW')?.querySelector('.team-pagination');
        if (paginationEl) {
          const currentSlide = this.realIndex + 1;
          paginationEl.innerHTML = `<span class="swiper-pagination-current">${currentSlide}</span>/<span class="swiper-pagination-total">${totalSlides}</span>`;
        }
      },
      // Добавляем триггер на включение/показ скрытого таба
      observerUpdate: function () {
        const paginationEl = n.closest('.swiperW')?.querySelector('.team-pagination');
        if (paginationEl) {
          const currentSlide = this.realIndex + 1;
          // Считаем общее количество страниц (групп слайдов)
          paginationEl.innerHTML = `<span class="swiper-pagination-current">${currentSlide}</span>/<span class="swiper-pagination-total">${totalSlides}</span>`;

         
        }
      }
    }
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