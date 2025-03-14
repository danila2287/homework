(function () {
  document.addEventListener('click', burgerIts)
  function burgerIts(e) {
    const burG = e.target.closest('.burger-icon')
    const navI = e.target.closest('.nav-ihner')
    if (!burG && !navI) return
    if (document.documentElement.clientWidth > 900) return
    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    }
    else {
      document.body.classList.remove('body--opened-menu')
    }
  }

  // табы===============================================
  const tabControl = document.querySelector('.tab__control')
  tabControl.addEventListener('click', tabControlI)
  function tabControlI(e) {


    e.preventDefault()
    const tabLink = e.target.closest('.tab__control-link')
    if (!tabLink) return

    const tabControlId = tabLink.getAttribute('href')
    if (document.querySelector('.content-schow')) {
      document.querySelector('.content-schow').classList.remove('content-schow')
    }
    document.querySelector(tabControlId).classList.add('content-schow')

    if (document.querySelector('.tab__accent-bg')) {
      document.querySelector('.tab__accent-bg').classList.remove('tab__accent-bg')
    }
    tabLink.classList.add('tab__accent-bg')

  }
  // Модалка
  document.addEventListener('click', function (e) {
    const modal = document.querySelector('.modal'); // Получаем модальное окно
    if (!modal) return;

    const modalBtn = e.target.closest('.abaut-krug_control'); // Кнопка открытия
    if (modalBtn) {
      modal.classList.add('modal--opened');
    }

    const closeBtn = e.target.closest('.modal__close'); // Кнопка закрытия
    if (closeBtn || e.target === modal) {
      modal.classList.remove('modal--opened');
    }
    const submitBtn = e.target.closest('.button__modal');
    if (submitBtn) {
      modal.classList.remove('modal--opened');
      alert('Ваш подарок отправлен на почту:)')
    }
  })
  //Аккордион
  const accordAll = document.querySelectorAll('.accordion-list')
  accordAll.forEach(el => {
    el.addEventListener('click', (e) => {

      const listBtn = e.target.closest('.accordion-list__control')
      if (!listBtn) return
      const accorionItem = listBtn.parentElement;
      const accordionContent = listBtn.nextElementSibling;
      document.querySelectorAll('.accordion-list__item').forEach(item => {
        if (item !== accorionItem) {
          item.classList.remove('control-icon--opened');
          const content = item.querySelector('.accordion-list__content');
          if (content) {
            content.style.maxHeight = '0px';
          }
        }
      });
      accorionItem.classList.toggle('control-icon--opened');
      if (accorionItem.classList.contains('control-icon--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
        accordionContent.style.marginBottom = '40px'
        if (document.documentElement.clientWidth < 800) {
          accordionContent.style.marginBottom = null;
        }
      }
      else {
        accordionContent.style.maxHeight = null;
        accordionContent.style.marginBottom = null;
      }
    })
  });
  // =====================================================
  new Swiper('.gallery__swiper', {
    slidesPerView: 1.5,
    spaceBetween: 15,
    pagination: {
      el: '.gallery__swiper-pagination',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },
    breakpoints: {
      1101: {
        slidesPerView: 4,
      },
      901: {
        spaceBetween: 32,
      },
      651: {
        slidesPerView: 3,
      },
      451: {
        slidesPerView: 2,
      },
    }
  });

  new Swiper('.review__swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    draggable: true,
    centeredSlides: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    navigation: {
      nextEl: '.review__next',
      prevEl: '.review__prev',
    },
    breakpoints: {
      1201: {
        slidesPerView: 2.1,
      },
      1087: {
        slidesPerView: 1.9,
      },
      966: {
        slidesPerView: 1.7,
      },
      852: {
        slidesPerView: 1.5,
      },
      732: {
        slidesPerView: 1.3,
      },
      655: {
        slidesPerView: 1.15,
      },

    }
  })

  // =================================input
}

)()


