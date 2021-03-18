import './styles.css';
import menuElement from './menu.json';
import menuTemplate from './templates/templates.hbs';

 
const refs = {
  body: document.querySelector('body'),
switch: document.querySelector('#theme-switch-toggle'),
  menu: document.querySelector('ul.js-menu')
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.menu.insertAdjacentHTML('beforeend', menuTemplate (menuElement));

refs.switch.addEventListener('change', setClassList);

function setClassList(e) {
  const check = refs.switch.checked;

  if (check) {
    refs.body.classList.add(Theme.DARK);
      refs.body.classList.remove(Theme.LIGHT);
       localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
     localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
const themeInLocal = localStorage.getItem('theme');

if (themeInLocal === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switch.checked = true;
}



// function setClassList(e) {
//   const check = refs.switch.checked;

//   if (check) {
//     refs.body.classList.add(Theme.DARK);
//     refs.body.classList.remove(Theme.LIGHT);
//   } else {
//     refs.body.classList.add(Theme.LIGHT);
//     refs.body.classList.remove(Theme.DARK);
//   }
// }

// function setLocalStorage(e) {
//   const check = refs.switch.checked;

//   if (check) {
//     localStorage.setItem('theme', Theme.DARK);
//   } else {
//     localStorage.removeItem('theme');
//     localStorage.setItem('theme', Theme.LIGHT);
//   }
// }



