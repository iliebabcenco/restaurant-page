
export default function displayMain() {
    const main = document.createElement('main');
    const mainTitle = document.createElement('h2');
    const mainQuote = document.createElement('h5');
    const mainImg = document.createElement('img');

    mainTitle.innerText = 'Pegasus Restaurant';
    mainQuote.innerText = 'Culinary traditions worthy of your taste!';

    main.setAttribute('class', 'main');
    main.setAttribute('id', 'mainPage');
    mainTitle.setAttribute('class', 'main-title');
    mainQuote.setAttribute('class', 'main-quote');
    mainImg.setAttribute('class', 'main-img');
    mainImg.setAttribute('src', 'assets/images/1.jpg');

    main.appendChild(mainTitle);
    main.appendChild(mainQuote);
    main.appendChild(mainImg);

    return main;
}
