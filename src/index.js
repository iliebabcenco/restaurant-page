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

function loadPage() {
    const content = document.getElementById('content')
    content.appendChild(displayNavBar());
    content.appendChild(displayContacts());
    content.appendChild(displayMain());
    content.appendChild(displayMenu());
    content.appendChild(displayFooter());
}

function displayContent() {
    const links = document.getElementsByClassName('menu-list-link');
    

}


loadPage();

