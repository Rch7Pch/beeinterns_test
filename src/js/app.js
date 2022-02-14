let menuItem = document.querySelector('.menu__item')
let menuElem = document.querySelector('.leftbar-menu-bottom');

menuItem.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log('im work');
  // menuItem.classList.toggle('open');
  // menuElem.classList.toggle('open');
})

const onClickTitle = (e) => {
  console.log(e.target.parentNode);
  e.target.parentNode.classList.toggle('open');
}


// menuItem.forEach(function (element){
//   element.onclick = function () {
//     menuItem.classList.add('open');
//     menuElem.classList.add('open');
//     menuElem.forEach(function (element){
//       console.log(element)
//     })
//   }
//
// })




