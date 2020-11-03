'use strict';

const modal = document.querySelector('#my-modal');
const closeBtn = document.querySelector('.close');
const closeFooter = document.querySelector('.modal-footer');

closeBtn.addEventListener('click', closeModal);
closeFooter.addEventListener('click', closeModal);
window.addEventListener('mousedown', outsideClick);

function onInit() {
  renderProjects(projects);
}

function toggleMenu() {
  document.body.classList.toggle('menu-open');
}

function openModal() {
  toggleMenu();
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

const projects = [{
    id: 6,
    name: 'myteam',
    url: 'https://alexkaz357.github.io/myteam/#/',
    git: 'https://github.com/alexkaz357/myteam',
    publishedAt: formatDate(1604361600000),
    labels: ['ReactJS', 'Sass', 'Pixel Perfect']
  },
  {
    id: 5,
    name: 'MissBooks',
    url: 'https://alexkaz357.github.io/MissBooks/#/',
    git: 'https://github.com/alexkaz357/MissBooks',
    publishedAt: formatDate(1602633600000),
    labels: ['VueJS', 'Sass', 'API']
  },
  {
    id: 4,
    name: 'FoodVentures',
    url: 'https://food-ventures-alexkaz.herokuapp.com/#/',
    git: 'https://github.com/alexkaz357/food-ventures',
    publishedAt: formatDate(1601424000000),
    labels: ['ReactJS', 'NodeJS', 'Sass']
  },
  {
    id: 3,
    name: 'AppSus',
    url: 'https://alexkaz357.github.io/AppSus/',
    git: 'https://github.com/alexkaz357/AppSus',
    publishedAt: formatDate(1598745600000),
    labels: ['ReactJS', 'CSS3', 'API']
  },
  {
    id: 2,
    name: 'Memegen',
    url: 'https://alexkaz357.github.io/memegen/',
    git: 'https://github.com/alexkaz357/memegen',
    publishedAt: formatDate(1597536000000),
    labels: ['VanillaJS', 'HTML5', 'CSS3']
  },
  {
    id: 1,
    name: 'Minesweeper',
    url: 'https://alexkaz357.github.io/minesweeper/',
    git: 'https://github.com/alexkaz357/minesweeper',
    publishedAt: formatDate(1595721600000),
    labels: ['VanillaJS', 'HTML5', 'CSS3']
  }
];

function renderProjects(projectsToRender) {
  var strHtml = '';
  projectsToRender.forEach(project => {
    strHtml +=
      `
      <div class="project">
        <h3>${project.name}</h3>
        <p class="label">${project.labels[0]}</p>
        <p class="label">${project.labels[1]}</p>
        <p class="label">${project.labels[2]}</p>
        <div>
        <a href="${project.git}" target="_blank" class="link-to">Git </a> <i class="fas fa-arrows-alt-h"></i> <a href="${project.url}" target="_blank" class="link-to"> Project</a>
        </div>
        <p>Air date - ${project.publishedAt}</p>
        <a href="${project.url}" target="_blank">
          <img src="./img/${project.id}.png">
        </a>
      </div>
      `
    return strHtml
  });
  document.querySelector('#projects').innerHTML = strHtml;
}

function formatDate(time) {
  var options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  return new Intl.DateTimeFormat('en', options).format(time);
}

var mybutton = document.querySelector('.up');
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
    mybutton.style.display = 'flex';
  } else {
    mybutton.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function filter(val) {
  let filteredProjects = projects.filter(project => project.labels.includes(val))
  if (val === 'all') filteredProjects = projects
  renderProjects(filteredProjects)
}