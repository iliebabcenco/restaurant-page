export default function displayContacts() {
    const contacts = document.createElement('main');
    const mainTitle = document.createElement('h2');
    const mainQuote = document.createElement('h5');
    const frame = document.createElement('iframe');

    mainTitle.innerText = 'Contact Us';
    mainQuote.innerText = 'Tel: +363321321213\n\n Email: true@email.cosmos';

    contacts.setAttribute('class', 'main');
    contacts.setAttribute('id', 'contactsPage');
    mainTitle.setAttribute('class', 'main-title');
    mainQuote.setAttribute('class', 'main-quote');
    frame.setAttribute('class', 'frame');
    frame.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2681.089314416867!2d27.88574340096106!3d47.779716136070775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb5e03bf3e88bf%3A0x28a8ca0e40e226!2zQXLIm2FyaWxvciwgQsSDbMibaSwgTW9sZG92YQ!5e0!3m2!1sro!2s!4v1615304002322!5m2!1sro!2s")

    contacts.style.display = 'none';

    contacts.appendChild(mainTitle);
    contacts.appendChild(mainQuote);
    contacts.appendChild(frame);

    return contacts;
}

