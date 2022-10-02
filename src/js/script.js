//открытие и закрытие спойлеров
const spoilersNode = document.querySelectorAll('.spoiler')
const spoilersArrowsNode = document.querySelectorAll('.spoiler__arrow')
const spoilerList = document.querySelectorAll('.sloiler__list')

window.addEventListener('click', function (event) {
   if (event.target.dataset.action === 'arrow') {
      if (event.target.closest('.spoiler')) {
         const spoiler = event.target.closest('.spoiler')
         spoiler.classList.toggle('spoiler--js-open-list')
      }

   }
})





