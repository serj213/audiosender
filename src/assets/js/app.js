

const intrestinSwiper = new Swiper('.intresting-container', {
   slidesPerView: 1,
   spaceBetween: 24,
   grabCursor: true,
   observer: true,
   observeParents: true,
   // autoplay: {
   //    delay: 6000,
   // },

   breakpoints: {
      // when window width is >= 320px
      1445: {
         slidesPerView: 3,
         spaceBetween: 34,
      },

      1400: {
         slidesPerView: 3,
         spaceBetween: 33,
      },

      1320: {
         slidesPerView: 2.5,
         spaceBetween: 24,
      },


      1200: {
         slidesPerView: 2.5,
      },


      1000: {
         slidesPerView: 2,
      },



      768: {
         slidesPerView: 1.5,

      },
      600: {
         slidesPerView: 1.2,
      },

      560: {
         slidesPerView: 1.333,
      },






      320: {
         slidesPerView: 1.11,
      }
   }
});




const swiper = new Swiper('.scheme-container', {
   slidesPerView: 1.9,
   spaceBetween: 150,
   grabCursor: true,
   autoplay: {
      delay: 3000,
   },
   breakpoints: {
      // when window width is >= 320px
      1445: {
         slidesPerView: 2,
         spaceBetween: 256,
      },


      1250: {
         slidesPerView: 2.286,
         spaceBetween: 178,
      },

      1100: {
         slidesPerView: 1.9,
         spaceBetween: 178,
      },


      1000: {
         slidesPerView: 1.731,
         spaceBetween: 156,
      },

      830: {
         slidesPerView: 1.5,
         spaceBetween: 156,
      },



      800: {
         slidesPerView: 1.4,
         spaceBetween: 156,
      },

      750: {
         slidesPerView: 1.44,
         spaceBetween: 96,
      },


      700: {
         slidesPerView: 2.1,
         spaceBetween: 48,
      },

      560: {
         slidesPerView: 1.8,
         spaceBetween: 48,
      },

      401: {
         slidesPerView: 1.3,
         spaceBetween: 48,
      },

      320: {
         slidesPerView: 1.3,
         spaceBetween: 40,
      },

   }
});

const advantadesSwiper = new Swiper('.advantages-container', {
   slidesPerView: 1.147,
   spaceBetween: 48,
   grabCursor: true,
   autoplay: {
      delay: 4000,
   },
   breakpoints: {
      // when window width is >= 320px
      1380: {
         slidesPerView: 2,
         spaceBetween: 256,
      },

      950: {
         slidesPerView: 1.86,
         spaceBetween: 156,
      },

      805: {
         slidesPerView: 1.6,
         spaceBetween: 156,

      },

      640: {
         slidesPerView: 1.46,
         spaceBetween: 96,
      },


      570: {
         slidesPerView: 1.53,
         spaceBetween: 48,
      },

      500: {
         slidesPerView: 1.33,
         spaceBetween: 48,
      },

      413: {
         slidesPerView: 1.28,
         spaceBetween: 48,
      },

   }

});


const reviewsSwiper = new Swiper('.reviews-container', {
   slidesPerView: 1.2,
   spaceBetween: 24,
   grabCursor: true,
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
   },
   autoplay: {
      delay: 5000,
   },

   breakpoints: {
      // when window width is >= 320px

      1350: {
         slidesPerView: 3,
         spaceBetween: 10,
      },


      900: {
         slidesPerView: 2,
         spaceBetween: 24,
      },

      900: {
         slidesPerView: 2,
         spaceBetween: 24,
      },

      450: {
         slidesPerView: 1.4,
         spaceBetween: 24,
      },
   }

});


// ========================Intresting Табы декстоп=================

const navTab = document.querySelectorAll('.intresting-tabs__tab');
const contentTab = document.querySelectorAll('.intresting-content');

navTab.forEach(function (item) {
   item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-id");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('.intresting-content--active')) {
         navTab.forEach(function (item) {
            item.classList.remove('intresting-tabs__tab--active');
         });

         contentTab.forEach(function (item) {
            item.classList.remove('intresting-content--active');
         });

         currentBtn.classList.add('intresting-tabs__tab--active');
         currentTab.classList.add('intresting-content--active');

      }
   });

});

// ================POPUP================================


const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');


let unlock = true;

const timeoute = 500;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener('click', function (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);

         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
         popupClose(el.closest('.popup'));
         e.preventDefault();

      });
   }
}


function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('popup.popup--active');
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         bodyLock();
      }
   }
   curentPopup.classList.add('popup--active');
   curentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
         popupClose(e.target.closest('.popup'));
      }
   })
}

function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('popup--active');
      if (doUnlock) {
         bodyUnLock();
      }
   }
}



function bodyLock() {
   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

   for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
   }
   body.style.paddingRight = lockPaddingValue;
   body.classList.add('lock');

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeoute);
}


function bodyUnLock() {

   setTimeout(function () {
      for (let index = 0; index < lockPadding.lenght; index++) {
         const el = lockPadding[index];
         el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      body.classList.remove('lock');
   }, timeoute);

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeoute)

}

// ================BURGER MENU=============================================

const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const menuClose = document.querySelector('#menu-close')
if (burger) {

   burger.addEventListener('click', function (e) {

      burger.classList.add('menu-burger--active');
      menu.classList.add('header-menu--active');
      document.body.classList.add('lock');
   });
};

if (menuClose) {

   menuClose.addEventListener('click', function (e) {

      burger.classList.remove('menu-burger--active');
      menu.classList.remove('header-menu--active');
      document.body.classList.remove('lock');
   });
};


// =====