let baseCard = document.querySelector('.cards-base-level');
let proCard = document.querySelector('.cards-pro-level');

const onClickTitle = (e) => {
  console.log(e.target.parentNode);
  e.target.parentNode.classList.toggle('open');
}


let courseBaseLevel = [
  {
    id: 1,
    level: 'base',
    img: 'src/img/weekly/weekly1.png',
    nameCourse: 'Структура HTML',
    desc: 'Назначение блоков: head, body',
    data: '01.02.2022',
  },
  {
    id: 2,
    level: 'base',
    img: 'src/img/weekly/weekly2.png',
    nameCourse: 'Подключение стилей',
    desc: 'Виды подключения стилей. Подключение шрифтов',
    data: '01.02.2022',
  },
  {
    id: 3,
    level: 'base',
    img: 'src/img/weekly/weekly3.png',
    nameCourse: 'CSS',
    desc: 'Базовый синтаксис CSS: селекторы, классы',
    data: '01.02.2022',
  },
  {
    id: 4,
    level: 'base',
    img: 'src/img/weekly/weekly4.png',
    nameCourse: 'Наследие и каскад',
    desc: 'Наследие и каскад',
    data: '01.02.2022',
  }
]

let courseProLevel = [
  {
    id: 5,
    level: 'pro',
    img: 'src/img/weekly/weekly1.png',
    nameCourse: 'HTML-формы',
    desc: 'HTML-формы',
    data: '01.02.2022',
  },
  {
    id: 6,
    level: 'pro',
    img: 'src/img/weekly/weekly2.png',
    nameCourse: 'Flex',
    desc: 'Принципы современной верстки сайта на flex',
    data: '01.02.2022',
  },
  {
    id: 7,
    level: 'pro',
    img: 'src/img/weekly/weekly3.png',
    nameCourse: 'Media и viewport',
    desc: 'Адаптивная верстка. Использование media и viewport',
    data: '01.02.2022',
  },
  {
    id: 8,
    level: 'pro',
    img: 'src/img/weekly/weekly4.png',
    nameCourse: 'CSS Grid',
    desc: 'CSS Grid',
    data: '01.02.2022',
  }
]


const renderBaseCards = () => {

  for (let key in courseBaseLevel) {
    baseCard.innerHTML += `
        <div class="card">
           <span>Лекция</span>
           <img src="${courseBaseLevel[key].img}" alt="Структура HTM img curses" width="" height="">
           <div class="card__content">
                   <h1 class="card__title">${courseBaseLevel[key].nameCourse}</h1>
                   <p class="card__desc">${courseBaseLevel[key].desc}</p>
           </div>
           <div class="card__footer">
           <span>${courseBaseLevel[key].data}</span>
             <div class="card__button">
               <button type="button" class="button button_colored">Смотреть</button>
             </div>
           </div>
         </div>
      `
  }
}

const renderProCards = () => {
  for (let key in courseProLevel) {
    proCard.innerHTML += `
       <div class="card">
          <span>Лекция</span>
          <img src="${courseProLevel[key].img}" alt="Структура HTM img curses" width="" height="">
          <div class="card__content">
                  <h1 class="card__title">${courseProLevel[key].nameCourse}</h1>
                  <p class="card__desc">${courseProLevel[key].desc}</p>
          </div>
          <div class="card__footer">
          <span>${courseProLevel[key].data}</span>
            <div class="card__button">
              <button type="button" class="button button_colored">Смотреть</button>
            </div>
          </div>
       </div>
    `
  }
}

renderProCards()
renderBaseCards()






