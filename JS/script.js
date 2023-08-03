const humberger = document.querySelector('.icon-menu');
const clickEvent = document.querySelector('.click-event');
const closeButton = document.querySelector('.close-btn');
const menuList = document.querySelectorAll('.menu-lists li a');

humberger.addEventListener('click', () => {
  clickEvent.classList.add('show');
});

closeButton.addEventListener('click', () => {
  clickEvent.classList.remove('show');
});

menuList.forEach((list) => {
  list.addEventListener('click', () => {
    clickEvent.classList.remove('show');
  });
});

// project details pop up window

const portfolio = document.querySelector('.project-intro-grid');
const popupCont = document.querySelector('.popup-cont');

const projects = `
<section class="project-intro">
  <figure class="project-picture-container">
    <img class="project-picture" src="images/project-img/gems.PNG" alt="GEMS website image">
  </figure>
  <div class="project-intro-right">
    <h1 class="project-title">GEMS</h1>
    <div class="project-stats margin-set">
      <p class="project-place">Ethiopia</p>
      <img src="images/project-img/Counter.svg" alt="">
      <p class="project-type">Front End Dev</p>
      <img src="images/project-img/Counter.svg" alt="">
      <p class="project-year">2023</p>
    </div>
    <p class="project-description margin-set">A GEMS website helps motivational speech lovers to get information about the program details.
    </p>
    <ul class="prog-lang-buttons margin-set">
      <li><a class="html lang" href="">html</a></li>
      <li><a class="css lang" href="">css</a></li>
      <li><a class="js lang" href="">javascript</a></li>
    </ul>
    <div class="see-project">
      <a id="id1" class="see-project-link" href="#">See Project</a>
    </div>
  </div>
</section>
<section class="project-intro">
  <figure class="project-picture-container order">
    <img class="project-picture" src="images/project-img/awesomebooks.PNG" alt="Awesome books website image">
  </figure>
  <div class="project-intro-right">
    <h1 class="project-title">Awesome Books</h1>
    <div class="project-stats margin-set">
      <p class="project-place">Github</p>
      <img src="images/project-img/Counter.svg" alt="">
      <p class="project-type">Front End Dev</p>
      <img src="images/project-img/Counter.svg" alt="">
      <p class="project-year">2023</p>
    </div>
    <p class="project-description margin-set">Awesome books is a simple website that displays a list of books and allows users to add and remove books from that list.
    </p>
    <ul class="prog-lang-buttons margin-set">
      <li><a class="html lang" href="">html</a></li>
      <li><a class="css lang" href="">css</a></li>
      <li><a class="js lang" href="">javascript</a></li>
    </ul>
    <div class="see-project">
      <a id="id2" class="see-project-link" href="#">See Project</a>
    </div>
  </div>
</section>
<section class="project-intro">
  <figure class="project-picture-container">
    <img class="project-picture" src="images/project-img/pokemon.PNG" alt="">
  </figure>
  <div class="project-intro-right">
    <h1 class="project-title">PoKemon</h1>
    <div class="project-stats margin-set">
      <p class="project-place">Github</p>
      <img src="images/project-img/Counter.svg" alt="">
      <p class="project-type">Front End Dev</p>
      <img src="images/project-img/Counter.svg" alt="">
      <p class="project-year">2023</p>
    </div>
    <p class="project-description margin-set">A pokemon website is designed for children and for adults who used to love pokemon games in their childhood. From the website, users could access the different creatures which inhabit the world of pokemon games.
      Users can give like for the creatures which they liked most and can also write their insights in the comments portion.
    </p>
    <ul class="prog-lang-buttons margin-set">
      <li><a class="html lang" href="">html</a></li>
      <li><a class="css lang" href="">css</a></li>
      <li><a class="js lang" href="">javascript</a></li>
    </ul>
    <div class="see-project">
      <a id="id3" class="see-project-link" href="#">See Project</a>
    </div>
  </div>
</section>
<section class="project-intro">
  <figure class="project-picture-container order">
    <img class="project-picture" src="images/project-img/todo-react.PNG" alt="todo list app">
  </figure>
  <div class="project-intro-right">
    <h1 class="project-title">Todo list</h1>
    <div class="project-stats margin-set">
      <p class="project-place">Github</p>
      <img src="images/project-img/Counter.svg" alt="">
      <p class="project-type">Front End Dev</p>
      <img src="images/project-img/Counter.svg" alt="">
      <p class="project-year">2023</p>
    </div>
    <p class="project-description margin-set">To-do list is a website which helps to organize tasks performed in a particular day. It lists the things that need to do and allows you to mark them as complete.
    </p>
    <ul class="prog-lang-buttons margin-set">
      <li><a class="js-link lang" href="#">React</a></li>
      <li><a class="css lang" href="">css</a></li>
    </ul>
    <div class="see-project">
      <a id="id4" class="see-project-link" href="#">See Project</a>
    </div>
  </div>
</section>
<section class="project-intro">
  <figure class="project-picture-container">
    <img class="project-picture" src="images/project-img/mathmag.PNG" alt="">
  </figure>
  <div class="project-intro-right">
    <h1 class="project-title">Math Magician</h1>
    <div class="project-stats margin-set">
      <p class="project-place">Github</p>
      <img src="images/project-img/Counter.svg" alt="">
      <p class="project-type">Front End Dev</p>
      <img src="images/project-img/Counter.svg" alt="">
      <p class="project-year">2023</p>
    </div>
    <p class="project-description margin-set">Math-magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to do different calculations using the Math JS library. 
      It is built with React and it is fully responsive.
    </p>
    <ul class="prog-lang-buttons margin-set">
      <li><a class="html lang" href="">React</a></li>
      <li><a class="css lang" href="">css</a></li>
    </ul>
    <div class="see-project">
      <a id="id5" class="see-project-link" href="#">See Project</a>
    </div>
  </div>
</section>
<section class="project-intro">
  <figure class="project-picture-container">
    <img class="project-picture" src="images/project-img/bookstore.PNG" alt="">
  </figure>
  <div class="project-intro-right">
    <h1 class="project-title">Bookstore</h1>
    <div class="project-stats margin-set">
      <p class="project-place">Github</p>
      <img src="images/project-img/Counter.svg" alt="">
      <p class="project-type">Front End Dev</p>
      <img src="images/project-img/Counter.svg" alt="">
      <p class="project-year">2023</p>
    </div>
    <p class="project-description margin-set">Book Store is a web application that allows users to add and remove books from a list. The application is built with React and Redux. The main goal is to put into practice the concepts of React and Redux and also to use the best practices in React programming.
    </p>
    <ul class="prog-lang-buttons margin-set">
      <li><a class="html lang" href="">React/Redux</a></li>
      <li><a class="css lang" href="">css</a></li>
    </ul>
    <div class="see-project">
      <a id="id6" class="see-project-link" href="#">See Project</a>
    </div>
  </div>
</section>
<section class="project-intro">
  <figure class="project-picture-container">
    <img class="project-picture" src="images/project-img/movie-app.PNG" alt="">
  </figure>
  <div class="project-intro-right">
    <h1 class="project-title">Movie App</h1>
    <div class="project-stats margin-set">
      <p class="project-place">Github</p>
      <img src="images/project-img/Counter.svg" alt="">
      <p class="project-type">Front End Dev</p>
      <img src="images/project-img/Counter.svg" alt="">
      <p class="project-year">2023</p>
    </div>
    <p class="project-description margin-set">Movie App is a dynamic website built with react components and redux store. It allows users to access list of movies or shows. It is responsive and can be used on mobile devices. The project was built using the youtube video lesson by Dipesh Malvia.
    </p>
    <ul class="prog-lang-buttons margin-set">
      <li><a class="html lang" href="">React/Redux</a></li>
      <li><a class="css lang" href="">Scss</a></li>
    </ul>
    <div class="see-project">
      <a id="id7" class="see-project-link" href="#">See Project</a>
    </div>
  </div>
</section>
<section class="project-intro">
  <figure class="project-picture-container">
    <img class="project-picture" src="images/project-img/schoollib.PNG" alt="">
  </figure>
  <div class="project-intro-right">
    <h1 class="project-title">School Library</h1>
    <div class="project-stats margin-set">
      <p class="project-place">Github</p>
      <img src="images/project-img/Counter.svg" alt="">
      <p class="project-type">Back End</p>
      <img src="images/project-img/Counter.svg" alt="">
      <p class="project-year">2023</p>
    </div>
    <p class="project-description margin-set">School library  is a project that simulates a school library. It allows you to add new person (students and teachers), add new books, and save records of who borrowed a given book and when.
    </p>
    <ul class="prog-lang-buttons margin-set">
      <li><a class="html lang" href="">Ruby</a></li>
    </ul>
    <div class="see-project">
      <a id="id8" class="see-project-link" href="#">See Project</a>
    </div>
  </div>
</section>`;

portfolio.innerHTML = projects;

const proObjects = [
  {
    name: 'GEMS',
    id: 'id1',
    featuredImage: './images/project-img/gems.PNG',
    description:
    'A GEMS website helps motivational speech lovers to get information about the program details.',
    technologies: ['html', 'css', 'javaScript'],
    demo: 'https://yodit93.github.io/GEMS-website/',
    source: 'https://github.com/yodit93/GEMS-website.git',
  },
  {
    name: 'Awesome Books',
    id: 'id2',
    featuredImage: './images/project-img/awesomebooks.PNG',
    description:
    'Awesome books is a simple website that displays a list of books and allows users to add and remove books from that list.',
    technologies: ['html', 'css', 'javaScript'],
    demo: 'https://yodit93.github.io/Awesome-Books-ES6/',
    source: 'https://github.com/yodit93/Awesome-Books-ES6',
  },
  {
    name: 'PoKemon',
    id: 'id3',
    featuredImage: './images/project-img/pokemon.PNG',
    description:
    'A pokemon website is designed for children and for adults who used to love pokemon games in their childhood. From the website, users could access the different creatures which inhabit the world of pokemon games. Users can give like for the creatures which they liked most and can also write their insights in the comments portion.',
    technologies: ['html', 'css', 'javaScript'],
    demo: 'https://yodit93.github.io/JavaScript-capstone-group-project/dist',
    source: 'https://github.com/yodit93/JavaScript-capstone-group-project',
  },
  {
    name: 'Todo List',
    id: 'id4',
    featuredImage: './images/project-img/todo-react.PNG',
    description:
    'To-do list is a website which helps to organize tasks performed in a particular day. It lists the things that need to do and allows you to mark them as complete.',
    technologies: ['React'],
    demo: 'https://todo-app-with-react.onrender.com',
    source: 'https://github.com/yodit93/todo-app-react',
  },
  {
    name: 'Math Magician',
    id: 'id5',
    featuredImage: './images/project-img/mathmag.PNG',
    description:
    'Math-magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to do different calculations using the Math JS library. It is built with React and it is fully responsive.',
    technologies: ['React'],
    demo: 'https://math-magicians-full-website.onrender.com',
    source: 'https://github.com/yodit93/Math-magicians',
  },
  {
    name: 'Bookstore',
    id: 'id6',
    featuredImage: './images/project-img/bookstore.PNG',
    description:
    'Book Store is a web application that allows users to add and remove books from a list. The application is built with React and Redux. The main goal is to put into practice the concepts of React and Redux and also to use the best practices in React programming.',
    technologies: ['React, Redux'],
    demo: 'https://book-store-pb0g.onrender.com',
    source: 'https://github.com/yodit93/book-store.git',
  },
  {
    name: 'Movie App',
    id: 'id7',
    featuredImage: './images/project-img/movie-app.PNG',
    description:
    'Movie App is a dynamic website built with react components and redux store. It allows users to access list of movies or shows. It is responsive and can be used on mobile devices. The project was built using the YouTube video lesson by Dipesh Malvia',
    technologies: ['React, Redux'],
    demo: 'https://movie-app-t8te.onrender.com',
    source: 'https://github.com/yodit93/movie-app',
  },
  {
    name: 'School Library',
    id: 'id8',
    featuredImage: './images/project-img/schoollib.PNG',
    description:
    'Movie App is a dynamic website built with react components and redux store. It allows users to access list of movies or shows. It is responsive and can be used on mobile devices. The project was built using the YouTube video lesson by Dipesh Malvia',
    technologies: ['Ruby'],
    demo: 'Not available yet',
    source: 'https://github.com/yodit93/school_library',
  },
];

function selectProject(idToChecked) {
  proObjects.forEach((obj) => {
    if (obj.id === idToChecked) {
      const popupWindow = document.createElement('div');
      popupWindow.classList.add('popup-wind');
      const dContSec = document.createElement('section');
      dContSec.classList.add('d-sec');
      const dContainer = document.createElement('div');
      dContainer.classList.add('d-cont');
      const dTitle = document.createElement('h2');
      dTitle.innerText = obj.name;
      dTitle.classList.add('project-title');
      dContainer.appendChild(dTitle);

      const dStatsCon = document.createElement('div');
      dStatsCon.classList.add('project-stats', 'margin-set');
      const dStatsPlace = document.createElement('p');
      dStatsPlace.innerText = 'Github';
      dStatsPlace.classList.add('project-place');
      dStatsCon.appendChild(dStatsPlace);

      const dStatsImg = document.createElement('img');
      dStatsImg.src = './images/project-img/Counter.svg';
      dStatsCon.appendChild(dStatsImg);
      const dStatsType = document.createElement('p');
      dStatsType.innerText = 'Full Stack Dev';
      dStatsType.classList.add('project-type');
      dStatsCon.appendChild(dStatsType);

      const dStatsImg2 = document.createElement('img');
      dStatsImg2.src = './images/project-img/Counter.svg';
      dStatsCon.appendChild(dStatsImg2);

      const dStatsYear = document.createElement('p');
      dStatsYear.innerText = '2023';
      dStatsYear.classList.add('project-year');
      dStatsCon.appendChild(dStatsYear);
      dContainer.appendChild(dStatsCon);

      const dImageCont = document.createElement('figure');
      dImageCont.classList.add('project-picture-container', 'dpro-img-cont');
      const dImage = document.createElement('img');
      dImage.src = obj.featuredImage;
      dImage.classList.add('project-picture');
      dImageCont.appendChild(dImage);
      dContainer.appendChild(dImageCont);

      const dFlexCont = document.createElement('div');
      dFlexCont.classList.add('dflex-cont');
      const dProjInfo = document.createElement('p');
      dProjInfo.innerText = obj.description;
      dProjInfo.classList.add('project-description', 'margin-set', 'dpro-disc');
      dFlexCont.appendChild(dProjInfo);

      const dRightCont = document.createElement('div');
      dRightCont.classList.add('dright-cont');
      const dLangCont = document.createElement('ul');
      dLangCont.classList.add('dp-lang-btn');
      const dLangCont1 = document.createElement('div');
      dLangCont1.classList.add('prog-lang-buttons', 'margin-set');
      const dLangCont2 = document.createElement('div');
      dLangCont2.classList.add('prog-lang-buttons', 'margin-set');

      const dataList = ['github', 'ruby', 'bootstrap'];

      obj.technologies.forEach((list) => {
        const dLang1 = document.createElement('li');
        dLang1.innerText = list;
        dLang1.classList.add(list, 'lang');
        dLangCont1.appendChild(dLang1);
      });
      dLangCont.appendChild(dLangCont1);
      dataList.forEach((list) => {
        const dLang = document.createElement('li');
        dLang.innerText = list;
        dLang.classList.add(list, 'lang', 'm-hide');
        dLangCont2.appendChild(dLang);
      });
      dLangCont.appendChild(dLangCont2);
      dRightCont.appendChild(dLangCont);

      const dButtonCont = document.createElement('div');
      dButtonCont.classList.add('dbtn-cont');
      const seeLiveBtn = document.createElement('a');
      seeLiveBtn.innerHTML = 'See live <img src="./images/seelive.svg" alt="Live demo">';
      seeLiveBtn.src = obj.demo;
      seeLiveBtn.classList.add('see-project-link', 's-btn');
      dButtonCont.appendChild(seeLiveBtn);
      const seeSrcBtn = document.createElement('a');
      seeSrcBtn.innerHTML = 'See Source <img src="./images/see-src.svg" alt="source code">';
      seeSrcBtn.classList.add('see-project-link', 's-btn');
      seeSrcBtn.src = obj.source;
      dButtonCont.appendChild(seeSrcBtn);
      dRightCont.appendChild(dButtonCont);
      dFlexCont.appendChild(dRightCont);
      dContainer.appendChild(dFlexCont);

      const closeBtn = document.createElement('div');
      closeBtn.innerText = '\u2715';
      closeBtn.classList.add('dclose-btn');
      dContainer.appendChild(closeBtn);

      dContSec.appendChild(dContainer);

      const dBtmLineFig = document.createElement('figure');
      dBtmLineFig.classList.add('end', 'align-btm');
      const dBottomLine = document.createElement('img');
      dBottomLine.src = './images/Shape.svg';
      dBtmLineFig.appendChild(dBottomLine);
      dContSec.appendChild(dBtmLineFig);
      popupWindow.appendChild(dContSec);
      popupCont.appendChild(popupWindow);

      closeBtn.addEventListener('click', () => {
        portfolio.innerHTML = projects;
        popupCont.classList.remove('active');
        document.querySelector('.header').style.display = 'block';
        document.querySelector('.main').style.display = 'block';
        window.location.reload();
      });
    }
  });
}

const seeProject = document.querySelectorAll('.see-project-link');
seeProject.forEach((links) => {
  links.addEventListener('click', (event) => {
    const checkedButton = event.target;
    const idToChecked = checkedButton.id;
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.main').style.display = 'none';
    selectProject(idToChecked);
    popupCont.classList.add('active');
  });
});

const submitButton = document.querySelector('#submit-button');
function validate() {
  const text = document.getElementById('email').value;
  const validator = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  document.forms[0].onsubmit = function email(e) {
    if (!(validator.test(text))) {
      document.getElementById('error-msg').innerHTML = 'Please use lowercase to enter valid email address!';
      document.getElementById('error-msg').style.visibility = 'visible';
      document.getElementById('error-msg').style.color = 'white';
      document.getElementById('error-msg').style.background = 'red';
      document.getElementById('error-msg').style.textAlign = 'center';
      e.preventDefault();
    }
  };
}
submitButton.addEventListener('click', () => {
  validate();
});

const form1 = document.querySelector('#contact');
form1.addEventListener('submit', (e) => {
  e.preventDefault();
  const obj = {
    fullName: document.querySelector('#name').value,
    emailAdress: document.querySelector('#email').value,
    message: document.querySelector('#textarea').value,
  };

  localStorage.setItem('text', JSON.stringify(obj));
});

const retrievedObject = localStorage.getItem('text');
const getValue = JSON.parse(retrievedObject);

window.addEventListener('load', () => {
  if (localStorage.getItem('text')) {
    document.querySelector('#name').value = getValue.fullName;
    document.querySelector('#email').value = getValue.emailAdress;
    document.querySelector('#textarea').value = getValue.message;
  }
});