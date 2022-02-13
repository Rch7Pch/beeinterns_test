let menuItem = document.querySelector('.menu__item')
let menuElem = document.querySelector('.leftbar-menu-bottom');


menuItem.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('im work');
  menuItem.classList.toggle('open');
  menuElem.classList.toggle('open');
})



