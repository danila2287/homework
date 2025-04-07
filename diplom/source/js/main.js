
(function () {
  document.addEventListener('click', burgerIts);

  function burgerIts(e) {
    const burG = e.target.closest('.burger-icon');
    const navI = e.target.closest('.nav-ihner');

    if (!burG && !navI) return;
    if (document.documentElement.clientWidth > 1450) return;

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu');
    } else {
      document.body.classList.remove('body--opened-menu');
    }
  }
  // ====================================================таб
  document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.tab__control-link');
    const desktopContents = document.querySelectorAll('.tab__content');
    const mobileContents = document.querySelectorAll('.tab__content-mobile');

    // Проверка мобильного вида
    function isMobileView() {
      return window.innerWidth < 1201;
    }

    // Инициализация Swiper
    const swiper = new Swiper('.gallery__swiper', {
      loop: false,
      slidesPerView: 1,
      navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
      },
      pagination: {
        el: '.gallery__swiper-pagination',
        type: 'fraction',
        renderCustom: function (swiper, current, total) {
          return `${current + 1}<span> / ${total}</span>`;
        }
      },
      on: {
        slideChange: function () {
          updateActiveState(this.realIndex);
        },
        init: function () {
          updateActiveState(0);
        }
      }
    });

    // Функция обновления состояния
    function updateActiveState(index) {
      // Обновление табов
      tabLinks.forEach((link, i) => {
        link.classList.toggle('tab__accent-bg', i === index);
      });

      // Обновление контента
      if (isMobileView()) {
        // Мобильный режим
        desktopContents.forEach(content => content.style.display = 'none');
        mobileContents.forEach((content, i) => {
          content.style.display = i === index ? 'block' : 'none';
        });
      } else {
        // Десктопный режим
        desktopContents.forEach((content, i) => {
          content.style.display = i === index ? 'block' : 'none';
        });
        mobileContents.forEach(content => content.style.display = 'none');
      }
    }

    // Обработчики кликов
    tabLinks.forEach((link, index) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        swiper.slideTo(index);
      });
    });

    // Обработчик изменения размера
    window.addEventListener('resize', function () {
      updateActiveState(swiper.realIndex);
    });

    // Инициализация
    updateActiveState(0);
  });
  // ======================================================око
  document.addEventListener('DOMContentLoaded', function () {
    // Находим все элементы
    const images = document.querySelectorAll('.content__img:nth-child(2)');

    // Инициализируем data-атрибуты
    images.forEach(img => {
      img.dataset.active = "true";

      // Обработчик клика
      img.addEventListener('click', function (e) {
        if (e.target === this || e.target === this.querySelector('img')) {
          this.dataset.active = this.dataset.active === "true" ? "false" : "true";
          e.stopPropagation();
        }
      });
    });

    // Клик по документу
    document.addEventListener('click', function () {
      images.forEach(img => {
        img.dataset.active = "true";
      });
    });
  });
  // ====================================================свайпер галереии
  new Swiper('.gallery__swiper', {
    slidesPerView: 1,

    pagination: {
      el: '.gallery__swiper-pagination', // Должно совпадать с HTML
      type: 'fraction',
      formatFractionCurrent: (number) => number,
      formatFractionTotal: (number) => number,
      renderFraction: function (currentClass, totalClass) {
        return `
          <span class="${currentClass}"></span>
          <span> из </span>
          <span class="${totalClass}"></span>
        `;
      }
    },
    navigation: {
      nextEl: '.gallery__next', // Должно совпадать с HTML
      prevEl: '.gallery__prev', // Должно совпадать с HTML
    },
    on: {
      slideChange: function () {
        if (this.isEnd) {
          this.el.classList.add('is-last-slide');
        } else {
          this.el.classList.remove('is-last-slide');
        }
      },
      init: function () {
        if (this.isEnd) {
          this.el.classList.add('is-last-slide');
        }
      }
    },
  });

  // ===================================================================свайпер чат-бот
  new Swiper('.chat-bot__swiper', {
    initialSlide: 2,
    slidesPerView: 1.1,
    centeredSlides: true,

    pagination: {
      el: '.chat-bot__swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: (number) => number,
      formatFractionTotal: (number) => number,
      renderFraction: function (currentClass, totalClass) {
        return `
          <span class="${currentClass}"></span>
          <span> из </span>
          <span class="${totalClass}"></span>
        `;
      }
    },

    breakpoints: {
      // Очень маленькие мобильные (до 359px)
      280: {
        slidesPerView: 1.1,
        spaceBetween: 20,
        centeredSlides: true
      },
      // Мелкие смартфоны (320-359px)
      320: {
        slidesPerView: 1.2,
        spaceBetween: 21,
        centeredSlides: true
      },
      // Средние смартфоны (360-399px)
      360: {
        slidesPerView: 1.3,
        spaceBetween: 22,
        centeredSlides: true
      },
      // Крупные смартфоны (400-413px)
      400: {
        slidesPerView: 1.4,
        spaceBetween: 23,
        centeredSlides: true
      },
      // iPhone 12/13 Mini и аналоги (414-479px)
      414: {
        slidesPerView: 1.5,
        spaceBetween: 24,
        centeredSlides: true
      },
      // Большие смартфоны (480-539px)
      480: {
        slidesPerView: 1.8,
        spaceBetween: 25,
        centeredSlides: true
      },
      // Фаблеты (540-639px)
      540: {
        slidesPerView: 2.0,
        spaceBetween: 26,
        centeredSlides: true
      },
      // Маленькие планшеты (640-767px)
      640: {
        slidesPerView: 2.2,
        spaceBetween: 27,
        centeredSlides: true
      },
      // Средние планшеты (700-767px)
      700: {
        slidesPerView: 2.5,
        spaceBetween: 28,
        centeredSlides: true
      },
      // Стандартные планшеты (768-899px)
      768: {
        slidesPerView: 2.8,
        spaceBetween: 30,
        centeredSlides: true
      },
      // Большие планшеты (900-1023px)
      900: {
        slidesPerView: 3.0,
        spaceBetween: 32,
        centeredSlides: true
      },
      // Планшеты в альбомной ориентации (1024-1199px)
      1024: {
        slidesPerView: 3.2,
        spaceBetween: 35,
        centeredSlides: true
      },
      // Переходный размер (1100-1199px)
      1100: {
        slidesPerView: 3.4,
        spaceBetween: 40,
        centeredSlides: true
      },
      // Ноутбуки (1200-1365px)
      1200: {
        slidesPerView: 3.6,
        spaceBetween: 45,
        centeredSlides: true
      },
      // Ноутбуки HD (1280-1365px)
      1280: {
        slidesPerView: 3.8,
        spaceBetween: 50,
        centeredSlides: true
      },
      // Большие ноутбуки (1366-1439px)
      1366: {
        slidesPerView: 4.0,
        spaceBetween: 55,
        centeredSlides: true
      },
      // FullHD (1440-1599px)
      1440: {
        slidesPerView: 4.3,
        spaceBetween: 65,
        centeredSlides: true
      },
      // FullHD широкоформатные (1500-1599px)
      1500: {
        slidesPerView: 4.5,
        spaceBetween: 75,
        centeredSlides: true
      },
      // Большие мониторы (1600-1919px)
      1600: {
        slidesPerView: 4.8,
        spaceBetween: 85,
        centeredSlides: true
      },
      // Широкоформатные мониторы (1700-1919px)
      1700: {
        slidesPerView: 5.0,
        spaceBetween: 90,
        centeredSlides: true
      },
      1800: {
        slidesPerView: 5.2,
        spaceBetween: 95,
        centeredSlides: true
      },
      // FullHD+ (1920px и больше)
      1920: {
        slidesPerView: 5.6,
        spaceBetween: 100,
        centeredSlides: true
      },
      // 2K мониторы (2560px)
      2560: {
        slidesPerView: 6.0,
        spaceBetween: 120,
        centeredSlides: true
      },
      // 4K мониторы (3840px)
      3840: {
        slidesPerView: 6.5,
        spaceBetween: 150,
        centeredSlides: true
      }
    },

    navigation: {
      nextEl: '.chat-bot__next',
      prevEl: '.chat-bot__prev',
    },

    on: {
      slideChange: function () {
        if (this.isEnd) {
          this.el.classList.add('is-last-slide');
        } else {
          this.el.classList.remove('is-last-slide');
        }

      },

      init: function () {
        if (this.isEnd) {
          this.el.classList.add('is-last-slide');
        }
      }
    },
  });
  // ===================================================================свайпер чат-бот мобиле
  new Swiper('.chat-bot__swiper-mobile', {
    initialSlide: 1,
    slidesPerView: 1.1,
    centeredSlides: true,

    pagination: {
      el: '.chat-bot__swiper-pagination-mobile',
      type: 'fraction',
      formatFractionCurrent: (number) => number,
      formatFractionTotal: (number) => number,
      renderFraction: function (currentClass, totalClass) {
        return `
          <span class="${currentClass}"></span>
          <span> из </span>
          <span class="${totalClass}"></span>
        `;
      }
    },

    breakpoints: {
      // Очень маленькие мобильные (до 359px)
      280: {
        slidesPerView: 1.1,
        spaceBetween: 20,
        centeredSlides: true
      },
      // Мелкие смартфоны (320-359px)
      320: {
        slidesPerView: 1.2,
        spaceBetween: 21,
        centeredSlides: true
      },
      // Средние смартфоны (360-399px)
      360: {
        slidesPerView: 1.3,
        spaceBetween: 22,
        centeredSlides: true
      },
      // Крупные смартфоны (400-413px)
      400: {
        slidesPerView: 1.4,
        spaceBetween: 23,
        centeredSlides: true
      },
      // iPhone 12/13 Mini и аналоги (414-479px)
      414: {
        slidesPerView: 1.5,
        spaceBetween: 24,
        centeredSlides: true
      },
      // Большие смартфоны (480-539px)
      480: {
        slidesPerView: 1.8,
        spaceBetween: 25,
        centeredSlides: true
      },
      // Фаблеты (540-639px)
      540: {
        slidesPerView: 2.0,
        spaceBetween: 26,
        centeredSlides: true
      },
      // Маленькие планшеты (640-767px)
      640: {
        slidesPerView: 2.2,
        spaceBetween: 27,
        centeredSlides: true
      },
      // Средние планшеты (700-767px)
      700: {
        slidesPerView: 2.5,
        spaceBetween: 28,
        centeredSlides: true
      },
      750: {
        slidesPerView: 2.6,
        spaceBetween: 29,
        centeredSlides: true
      },
      // Стандартные планшеты (768-899px)
      801: {
        slidesPerView: 2.8,
        spaceBetween: 30,
        centeredSlides: true
      },
      
    },

    navigation: {
      nextEl: '.chat-bot__next-mobile',
      prevEl: '.chat-bot__prev-mobile',
    },
    on: {
      slideChange: function () {
        if (this.isEnd) {
          this.el.classList.add('is-last-slide');
        } else {
          this.el.classList.remove('is-last-slide');
        }

      },

      init: function () {
        if (this.isEnd) {
          this.el.classList.add('is-last-slide');
        }
      }
    },


  });

  // =================================================аккордион
  // 
  document.querySelectorAll('.accordion-list__control').forEach(button => {
    button.addEventListener('click', () => {
      const accordionItem = button.closest('.accordion-list__item');
      const accordionContent = button.nextElementSibling;

      // Закрываем все другие элементы
      document.querySelectorAll('.accordion-list__item').forEach(item => {
        if (item !== accordionItem) {
          item.classList.remove('control--icon--opened');
          item.querySelector('.accordion-list__content').style.maxHeight = null;
        }
      });

      // Переключаем текущий элемент
      accordionItem.classList.toggle('control--icon--opened');

      if (accordionItem.classList.contains('control--icon--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });
})();