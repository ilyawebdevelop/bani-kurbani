import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import "./modules/inputmask.min.js";
import "./../../node_modules/page-scroll-to-id/jquery.malihu.PageScroll2id.js";
import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask({
  mask: '+7 (999) 999-99-99',
  onBeforeWrite: function (event, buffer, caretPos, opts) {
    // console.log(caretPos);
    // Проверяем:
    // 1. Позиция каретки (caretPos) равна 5 (вторая цифра в "99")
    // 2. Нажата клавиша "8"
    if (caretPos === 5 && event.key === '8') {
      event.preventDefault(); // Запрещаем ввод     
      // console.log("Ввод 8 в этой позиции запрещен!");
      return {
        refreshFromBuffer: true,
        buffer: [],
        caret: 4
      };
    }
  },
  onBeforePaste: function (pastedValue, opts) {
    // Удаляем всё, кроме цифр
    var processedValue = pastedValue.replace(/\D/g, "");

    // Если первая цифра 7 или 8 и в строке 11 цифр, убираем первую
    if (processedValue.length === 11 && (processedValue[0] === '7' || processedValue[0] === '8')) {
      return processedValue.substring(1);
    }

    return pastedValue;
  }

});

im.mask(inputs);

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

function map() {
  const contactsMap = document.querySelector("#map");
  if (contactsMap) {
    const center = JSON.parse(contactsMap.dataset.center);
    const zoom = Number(contactsMap.dataset.zoom);
    function init() {
      const htmlMap = new ymaps.Map(contactsMap, {
        center,
        zoom
      });
      const placemark = new ymaps.Placemark(center, {}, {
        iconLayout: "default#image",
        iconImageHref: "../img/icons/marker.svg",
        iconImageSize: [43, 50],
        iconImageOffset: [-22, -25]
      });
      htmlMap.controls.remove("geolocationControl");
      htmlMap.controls.remove("searchControl");
      htmlMap.controls.remove("trafficControl");
      htmlMap.controls.remove("typeSelector");
      htmlMap.controls.remove("fullscreenControl");
      htmlMap.controls.remove("rulerControl");
      htmlMap.behaviors.disable(["scrollZoom"]);
      htmlMap.geoObjects.add(placemark);
    }
    ymaps.ready(init);
  }
}

map();

$('.accordion-header').click(function () {
  // Находим текстовый контент, который идет сразу за кликнутым заголовком
  const currentContent = $(this).next('.accordion-content');

  // Закрываем абсолютно все блоки .accordion-content на странице, кроме текущего
  $('.accordion-content').not(currentContent).slideUp(300);

  // НАХОДИМ ВСЕ заголовки на странице, убираем у них класс active (кроме текущего)
  $('.accordion-header').not(this).removeClass('active');

  // Плавно переключаем видимость текущего контента
  currentContent.slideToggle(300);

  // Переключаем (добавляем/удаляем) класс active на самом кликнутом заголовке
  $(this).toggleClass('active');
});

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    
    if (window.scrollY >= 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.headerNav');
const bodyEl = document.querySelector('body');
const btnClose = document.querySelector('.headerNavClose');

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}


btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
});
btnClose?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
});


$("a[rel='m_PageScroll2id']").mPageScroll2id({
  onStart: function () {

    if (mediaQueryMax991.matches) {
      toggleMenu();
      toggleBurger();
      bodyOverflow();
    }
  },
  scrollSpeed: 50,
  offset: 77,
});