let menuItem = document.querySelectorAll('.menu__item')
let menuElem = document.querySelectorAll('.leftbar-menu-bottom');

// menuItem.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log('im work');
//   menuItem.classList.toggle('open');
//   menuElem.classList.toggle('open');
// })

menuItem.forEach(function (element){
  element.onclick = function () {
    menuItem.classList.add('open');
    menuElem.classList.add('open');
    menuElem.forEach(function (element){
      console.log(element)
    })
  }

})




