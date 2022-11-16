//слайдер с акциями
$(document).ready(function () {
   $(".shares__cards-slider").slick({
      arrows: true,
      dots: false,
      slidesToShow: 6,
      speed: 1000,
      autoplay: true,
      slidesToScroll: 1,
      infinite: false,
      responsive: [{
         breakpoint: 1280,
         settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
         },
      },
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
         },
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
         },
      },

      ],
   });
});






//открытие и закрытие спойлеров
const spoilersNode = document.querySelectorAll('.spoiler')
const spoilersArrowsNode = document.querySelectorAll('.spoiler__arrow')
const spoilerList = document.querySelectorAll('.sloiler__list')

spoilersNode.forEach(elem => {
   elem.addEventListener('click', function () {
      spoilersNode.forEach(e => {
         e.classList.remove('spoiler--js-open-list')
      })
      this.classList.add('spoiler--js-open-list')
   })
})

//меню акций "переходы"
const sharesItemNode = document.querySelectorAll('.shares__nav-item-link')
sharesItemNode.forEach(elem => {
   elem.addEventListener('click', function () {
      sharesItemNode.forEach(el => {
         el.classList.remove('shares__nav-item-link--js-add-color')
      })
      this.classList.add('shares__nav-item-link--js-add-color')
   })
})
// выбор продукта чекбоксы
const productsListItemNode = document.querySelectorAll('.products__list-item')
productsListItemNode.forEach(el => {
   el.addEventListener('click', function () {
      el.classList.toggle('products__list-item--js-active')

   })
})
// открытие и закрытие бургер меню
const burgerNode = document.querySelector('.burger')
const burgerMenuNode = document.querySelector('.burger-menu')
burgerNode.addEventListener('click', () => {
   burgerNode.classList.toggle('burger--js-active')
   burgerMenuNode.classList.toggle('burger-menu--js-toggle')
})
//меню выбор адреса

const addressNameNode = document.querySelectorAll('.address-menu__nav-item-link')
const addresSvgNode = document.querySelectorAll('.address-menu__svg')

addressNameNode.forEach(function (elem) {
   elem.addEventListener('click', function () {
      addressNameNode.forEach(function (e) {
         e.classList.remove('address-menu__nav-item-link--js-color-add')
      })
      this.classList.add('address-menu__nav-item-link--js-color-add')
   })
})

//добавление адреса и закрытие 
const addressAddNode = document.querySelector('.add-address--js-open')
const locationSearchNode = document.querySelector('.popup-location-w')
const closeLocationNode = document.querySelector('.popup-location__close')
const addressNode = document.querySelectorAll('.address')
const addressMenuNode = document.querySelector('.address-menu')

addressNode.forEach(elem => {
   elem.addEventListener('click', function () {
      addressMenuNode.classList.toggle('address-menu--js-open')
   })
})

addressAddNode.addEventListener('click', function () {
   locationSearchNode.classList.add('popup-location-w--js-open')
   addressMenuNode.classList.remove('address-menu--js-open')
})
closeLocationNode.addEventListener('click', function () {
   locationSearchNode.classList.remove('popup-location-w--js-open')
})

// выподающее меню с ноиерами телефонов
const callNode = document.querySelector('.call')
const phonesMenuNode = document.querySelector('.phones')
window.addEventListener('click', function (event) {
   if (callNode.contains(event.target) || phonesMenuNode.contains(event.target)) {
      phonesMenuNode.classList.add('phones--js-open')
   }
   else {
      phonesMenuNode.classList.remove('phones--js-open')
   }
})
//окрытие и закрытие попап-слайдера с выбором акций или продукта
const cardItemNode = document.querySelectorAll('.card')
const sliderCardNode = document.querySelector('.popup-cards')
const sliderCloseNode = document.querySelectorAll('.popup-card__close')

window.addEventListener('click', function (event) {
   cardItemNode.forEach(function (e) {
      if (e.contains(event.target) || sliderCardNode.contains(event.target)) {
         sliderCardNode.classList.add('popup-cards--js-open')
      }

   })
   sliderCloseNode.forEach(function (el) {
      if (el.contains(event.target)) {
         sliderCardNode.classList.remove('popup-cards--js-open')
      }
   })
})

//слайдер
const sliderListNode = document.querySelector('.popup-cards__slider-list')
const nextCardNode = document.querySelector('.popup-cards__arrow-next')
const prevCardNode = document.querySelector('.popup-cards__arrow-prev')
let size = 0;
nextCardNode.addEventListener('click', function () {
   size += 445
   if (size > 2225) {
      size = 0;
   }
   sliderListNode.style.right = size + 'px'
})
prevCardNode.addEventListener('click', function () {
   size += -445
   if (size < 0) {
      size = 2225
   }
   sliderListNode.style.right = size + 'px'
})

// Дополнительные продукты к заказу 
const additionalProduct = document.querySelectorAll('.popup-product__product')
additionalProduct.forEach(function (e) {
   e.addEventListener('mouseover', function () {
      if (e.classList.contains('popup-product__product--js-toggle')) {
         this.classList.remove('popup-product__product--js-img-scale')
      }
      else {
         e.classList.add('popup-product__product--js-img-scale')
      }
   })
})
additionalProduct.forEach(function (element) {
   element.addEventListener('mouseout', function () {
      this.classList.remove('popup-product__product--js-img-scale')
   })
})
additionalProduct.forEach(function (elem) {
   elem.addEventListener('mousedown', function () {
      this.classList.remove('popup-product__product--js-img-scale')
   })

})
additionalProduct.forEach(function (e) {
   e.addEventListener('click', function () {
      this.classList.toggle('popup-product__product--js-toggle')
   })

})
// открытие инфо о продукте
const dropdownInfo = document.querySelectorAll('.popup-product__info')
dropdownInfo.forEach(el => {
   el.addEventListener('click', function () {
      dropdownInfo.forEach(e => {
         e.classList.toggle('popup-product__info--js-toggle')
      })
   })
})


// попап открытие и закрытие продукта 
const productNode = document.querySelectorAll('.product')
const popupProductNode = document.querySelectorAll('.popup-product')
productNode.forEach(el => {
   el.addEventListener('click', function () {
      let index = this.dataset.id
      popupProductNode.forEach(e => {
         e.classList.remove('popup-product--js-open')
      })
      popupProductNode[index].classList.add('popup-product--js-open')
   })
})
const productCloseNode = document.querySelectorAll('.popup-product__close')
window.addEventListener('click', function (event) {
   productCloseNode.forEach(el => {
      if (el.contains(event.target)) {
         popupProductNode.forEach(el => {
            el.classList.remove('popup-product--js-open')
         })
      }
   })
})




