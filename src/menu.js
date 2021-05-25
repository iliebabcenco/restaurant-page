const displayMenu = () => {
  const menu = document.createElement('main');
  const mainQuote = document.createElement('h5');
  const mainImg = document.createElement('img');

  const dishes = document.createElement('div');
  const dish1 = document.createElement('a');
  const dish2 = document.createElement('a');
  const dish3 = document.createElement('a');

  const imgDish1 = document.createElement('img');
  const imgDish2 = document.createElement('img');
  const imgDish3 = document.createElement('img');

  const parDish1 = document.createElement('p');
  const parDish2 = document.createElement('p');
  const parDish3 = document.createElement('p');

  dishes.setAttribute('class', 'dishes');

  dish1.setAttribute('class', 'dish');
  dish1.setAttribute('href', '#');
  dish2.setAttribute('class', 'dish');
  dish2.setAttribute('href', '#');
  dish3.setAttribute('class', 'dish');
  dish3.setAttribute('href', '#');

  imgDish1.setAttribute('class', 'img-dish');
  imgDish1.setAttribute('src', 'assets/images/menu2.jpg');
  imgDish2.setAttribute('class', 'img-dish');
  imgDish2.setAttribute('src', 'assets/images/menu3.jpg');
  imgDish3.setAttribute('class', 'img-dish');
  imgDish3.setAttribute('src', 'assets/images/menu4.jpg');

  parDish1.setAttribute('class', 'par-dish');
  parDish1.innerText = 'First Course';
  parDish2.setAttribute('class', 'par-dish');
  parDish2.innerText = 'Second Course';
  parDish3.setAttribute('class', 'par-dish');
  parDish3.innerText = 'Dessert';

  mainQuote.innerText = 'We use only the best species!';

  menu.setAttribute('class', 'menu, main');
  menu.setAttribute('id', 'menuPage');
  mainQuote.setAttribute('class', 'main-quote');
  mainImg.setAttribute('class', 'main-menu-img');
  mainImg.setAttribute('src', 'assets/images/menu1.jpg');

  menu.style.display = 'none';

  menu.appendChild(mainImg);
  menu.appendChild(mainQuote);
  menu.appendChild(dishes);
  dishes.appendChild(dish1);
  dishes.appendChild(dish2);
  dishes.appendChild(dish3);
  dish1.appendChild(imgDish1);
  dish1.appendChild(parDish1);
  dish2.appendChild(imgDish2);
  dish2.appendChild(parDish2);
  dish3.appendChild(imgDish3);
  dish3.appendChild(parDish3);
  return menu;
};

export default displayMenu;