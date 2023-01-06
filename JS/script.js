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
  <img class="project-picture" src="images/project-img/project1.svg" alt="">
</figure>
<div class="project-intro-right">
  <h1 class="project-title">Tonic</h1>
  <div class="project-stats margin-set">
    <p class="project-place">CANOPY</p>
    <img src="images/project-img/Counter.svg" alt="">
    <p class="project-type">Back End Dev</p>
    <img src="images/project-img/Counter.svg" alt="">
    <p class="project-year">2015</p>
  </div>
  <p class="project-description margin-set">A daily selection of privately personalized reads; 
      no accounts or sign-ups required.
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
  <img class="project-picture" src="images/project-img/project2.svg" alt="">
</figure>
<div class="project-intro-right">
  <h1 class="project-title">Multi-Post
    Stories</h1>
  <div class="project-stats margin-set">
    <p class="project-place">CANOPY</p>
    <img src="images/project-img/Counter.svg" alt="">
    <p class="project-type">Back End Dev</p>
    <img src="images/project-img/Counter.svg" alt="">
    <p class="project-year">2015</p>
  </div>
  <p class="project-description margin-set">A daily selection of privately personalized reads; 
      no accounts or sign-ups required.
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
  <img class="project-picture" src="images/project-img/project3.svg" alt="">
</figure>
<div class="project-intro-right">
  <h1 class="project-title">Tonic</h1>
  <div class="project-stats margin-set">
    <p class="project-place">CANOPY</p>
    <img src="images/project-img/Counter.svg" alt="">
    <p class="project-type">Back End Dev</p>
    <img src="images/project-img/Counter.svg" alt="">
    <p class="project-year">2015</p>
  </div>
  <p class="project-description margin-set">A daily selection of privately personalized reads; 
      no accounts or sign-ups required.
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
  <img class="project-picture" src="images/project-img/project4.svg" alt="">
</figure>
<div class="project-intro-right">
  <h1 class="project-title">Multi-Post
    Stories</h1>
  <div class="project-stats margin-set">
    <p class="project-place">CANOPY</p>
    <img src="images/project-img/Counter.svg" alt="">
    <p class="project-type">Back End Dev</p>
    <img src="images/project-img/Counter.svg" alt="">
    <p class="project-year">2015</p>
  </div>
  <p class="project-description margin-set">A daily selection of privately personalized reads; 
      no accounts or sign-ups required.
  </p>
  <ul class="prog-lang-buttons margin-set">
    <li><a class="html-link lang" href="">html</a></li>
    <li><a class="css-link lang" href="#">css</a></li>
    <li><a class="js-link lang" href="#">javascript</a></li>
  </ul>
  <div class="see-project">
    <a id="id4" class="see-project-link" href="#">See Project</a>
  </div>
</div>
</section>`;

portfolio.innerHTML = projects;

const proObjects = [
  {
    name: 'Tonic',
    id: 'id1',
    featuredImage: './images/project-img/project1.svg',
    description:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
    but also the leap into electronic typesetting, remaining essent`,
    technologies: ['html', 'css', 'javaScript'],
    demo: 'https://yodit93.github.io/Personal-portfolio/',
    source: 'https://github.com/yodit93/Personal-portfolio',
  },
  {
    name: 'Tonic',
    id: 'id2',
    featuredImage: './images/project-img/project2.svg',
    description:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
    but also the leap into electronic typesetting, remaining essent`,
    technologies: ['html', 'css', 'javaScript'],
    demo: 'https://yodit93.github.io/Personal-portfolio/',
    source: 'https://github.com/yodit93/Personal-portfolio',
  },
  {
    name: 'Tonic',
    id: 'id3',
    featuredImage: './images/project-img/project3.svg',
    description:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
    but also the leap into electronic typesetting, remaining essent`,
    technologies: ['html', 'css', 'javaScript'],
    demo: 'https://yodit93.github.io/Personal-portfolio/',
    source: 'https://github.com/yodit93/Personal-portfolio',
  },
  {
    name: 'Tonic',
    id: 'id3',
    featuredImage: './images/project-img/project4.svg',
    description:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
    but also the leap into electronic typesetting, remaining essent`,
    technologies: ['html', 'css', 'javaScript'],
    demo: 'https://yodit93.github.io/Personal-portfolio/',
    source: 'https://github.com/yodit93/Personal-portfolio',
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
      dStatsPlace.innerText = 'CANOPY';
      dStatsPlace.classList.add('project-place');
      dStatsCon.appendChild(dStatsPlace);

      const dStatsImg = document.createElement('img');
      dStatsImg.src = './images/project-img/Counter.svg';
      dStatsCon.appendChild(dStatsImg);
      const dStatsType = document.createElement('p');
      dStatsType.innerText = 'Back End Dev';
      dStatsType.classList.add('project-type');
      dStatsCon.appendChild(dStatsType);

      const dStatsImg2 = document.createElement('img');
      dStatsImg2.src = './images/project-img/Counter.svg';
      dStatsCon.appendChild(dStatsImg2);

      const dStatsYear = document.createElement('p');
      dStatsYear.innerText = '2015';
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