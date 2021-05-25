import displayMain from './mainpage';

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

function loadPage() {
    const content = document.getElementById('content')
    content.appendChild(displayNavBar());
    content.appendChild(displayMain());
}


loadPage();

