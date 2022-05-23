let baseCard = document.querySelector('.cards-base-level');
let proCard = document.querySelector('.cards-pro-level');

const onClickTitle = (e) => {
  console.log(e.target.parentNode);
  e.target.parentNode.classList.toggle('open');
}


let courseLevel = [
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
  },
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

class Card {
  constructor(img, nameCourse, descCourse, data) {
    this.img = img;
    this.nameCourse = nameCourse;
    this.descCourse = descCourse;
    this.data = data;
  }

  render(card) {
    let out = ''
    out.innerHtml += `
      <div class="card">
              <span>Лекция</span>
              <img src="${this.img}" alt="Структура HTM img curses" width="" height="">
              <div class="card__content">
                      <h1 class="card__title">${this.nameCourse}</h1>
                      <p class="card__desc">${this.descCourse}</p>
              </div>
              <div class="card__footer">
              <span>${this.data}</span>
                <div class="card__button">
                  <button type="button" class="button button_colored">Смотреть</button>
                </div>
              </div>
      </div>
    `
  }
}

let card = new Card(courseLevel.img, courseLevel.nameCourse, courseLevel.desc, courseLevel.data)
card.render()


const renderCards = () => {

  for (let key in courseLevel) {
    if (courseLevel[key].level['base']) {
      baseCard.innerHTML += `
           <div class="card">
              <span>Лекция</span>
              <img src="${courseLevel[key].img}" alt="Структура HTM img curses" width="" height="">
              <div class="card__content">
                      <h1 class="card__title">${courseLevel[key].nameCourse}</h1>
                      <p class="card__desc">${courseLevel[key].desc}</p>
              </div>
              <div class="card__footer">
              <span>${courseLevel[key].data}</span>
                <div class="card__button">
                  <button type="button" class="button button_colored">Смотреть</button>
                </div>
              </div>
           </div>
      `
    }

    if (courseLevel[key].level['pro']) {
      proCard.innerHTML += `
           <div class="card">
              <span>Лекция</span>
              <img src="${courseLevel[key].img}" alt="Структура HTM img curses" width="" height="">
              <div class="card__content">
                      <h1 class="card__title">${courseLevel[key].nameCourse}</h1>
                      <p class="card__desc">${courseLevel[key].desc}</p>
              </div>
              <div class="card__footer">
              <span>${courseLevel[key].data}</span>
                <div class="card__button">
                  <button type="button" class="button button_colored">Смотреть</button>
                </div>
              </div>
           </div>
      `
    }
  }
}
renderCards()






