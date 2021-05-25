import displayMain from './mainpage';
import displayMenu from './menu';
import displayContacts from './contact';

function displayNavBar() {
  const nav = document.createElement('nav');
  const navTitle = document.createElement('h1');
  const navUl = document.createElement('ul');
  const homeLi = document.createElement('li');
  const menuLi = document.createElement('li');
  const contactLi = document.createElement('li');
  const homeLiA = document.createElement('a');
  const menuLiA = document.createElement('a');
  const contactLiA = document.createElement('a');
  navTitle.innerText = 'Pegasus Restaurant';
  homeLiA.innerText = 'Home';
  contactLiA.innerText = 'Contact';
  menuLiA.innerText = 'Menu';
  nav.setAttribute('class', 'nav-bar');
  navTitle.setAttribute('class', 'rest-title');
  navUl.setAttribute('class', 'menu-list');
  homeLi.setAttribute('class', 'menu-list-item');
  menuLi.setAttribute('class', 'menu-list-item');
  contactLi.setAttribute('class', 'menu-list-item');
  homeLiA.setAttribute('class', 'menu-list-link');
  menuLiA.setAttribute('class', 'menu-list-link');
  contactLiA.setAttribute('class', 'menu-list-link');

  homeLiA.setAttribute('id', 'home-link');
  menuLiA.setAttribute('id', 'menu-link');
  contactLiA.setAttribute('id', 'contact-link');

  homeLiA.setAttribute('href', '#');
  menuLiA.setAttribute('href', '#');
  contactLiA.setAttribute('href', '#');

  nav.appendChild(navTitle);
  nav.appendChild(navUl);
  navUl.appendChild(homeLi);
  navUl.appendChild(menuLi);
  navUl.appendChild(contactLi);
  homeLi.appendChild(homeLiA);
  menuLi.appendChild(menuLiA);
  contactLi.appendChild(contactLiA);

  return nav;
}

function displayFooter() {
  const footer = document.createElement('footer');
  const title = document.createElement('h5');
  title.innerText = 'Copyright \u00A9 Ilie Babcenco';
  footer.appendChild(title);
  footer.setAttribute('class', 'footer');
  title.setAttribute('class', 'copyright');
  return footer;
}

function displayContent(pageName) {
  const content = document.getElementsByClassName('main');
  for (let i = 0; i < content.length; i += 1) {
    content[i].style.display = 'none';
  }
  document.getElementById(pageName).style.display = 'block';
}

function loadPage() {
  const content = document.getElementById('content');
  content.appendChild(displayNavBar());
  content.appendChild(displayMain());
  content.appendChild(displayMenu());
  content.appendChild(displayContacts());

  content.appendChild(displayFooter());

  document.getElementById('home-link').onclick = function () { displayContent('mainPage'); };
  document.getElementById('menu-link').onclick = function () { displayContent('menuPage'); };
  document.getElementById('contact-link').onclick = function () { displayContent('contactsPage'); };
}

loadPage();
