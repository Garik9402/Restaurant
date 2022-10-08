//открытие и закрытие спойлеров
const spoilersNode = document.querySelectorAll('.spoiler')
const spoilersArrowsNode = document.querySelectorAll('.spoiler__arrow')
const spoilerList = document.querySelectorAll('.sloiler__list')

window.addEventListener('click', function (event) {
   if (event.target.dataset.action === 'arrow') {
      const spoiler = event.target.closest('.spoiler')

   }

})
spoilersArrowsNode.forEach(elem => {
   elem.addEventListener('click', function (event) {
      spoilersArrowsNode.forEach(e => {
         e.classList.remove('spoiler__arrow--js-open-list')
      })
      spoilersArrowsNode.forEach(element => {
         if (event.target.dataset.action === 'arrow') {
            const spoiler = event.target.closest('.spoiler')
            spoiler.classList.add('spoiler--js-open-list')
         }
         if (event.target.dataset.action != 'arrow') {
            spoiler.classList.remove('spoiler--js-open-list')
         }

      });
      this.classList.add('spoiler__arrow--js-open-list')
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




