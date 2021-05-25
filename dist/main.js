/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayContacts = () => {\n  const contacts = document.createElement('main');\n  const mainTitle = document.createElement('h2');\n  const mainQuote = document.createElement('h5');\n  const frame = document.createElement('iframe');\n\n  mainTitle.innerText = 'Contact Us';\n  mainQuote.innerText = 'Tel: +363321321213\\n\\n Email: true@email.cosmos';\n\n  contacts.setAttribute('class', 'main');\n  contacts.setAttribute('id', 'contactsPage');\n  mainTitle.setAttribute('class', 'main-title');\n  mainQuote.setAttribute('class', 'main-quote');\n  frame.setAttribute('class', 'frame');\n  frame.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2681.089314416867!2d27.88574340096106!3d47.779716136070775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb5e03bf3e88bf%3A0x28a8ca0e40e226!2zQXLIm2FyaWxvciwgQsSDbMibaSwgTW9sZG92YQ!5e0!3m2!1sro!2s!4v1615304002322!5m2!1sro!2s');\n\n  contacts.style.display = 'none';\n\n  contacts.appendChild(mainTitle);\n  contacts.appendChild(mainQuote);\n  contacts.appendChild(frame);\n\n  return contacts;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayContacts);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainpage */ \"./src/mainpage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst displayNavBar = () => {\n  const nav = document.createElement('nav');\n  const navTitle = document.createElement('h1');\n  const navUl = document.createElement('ul');\n  const homeLi = document.createElement('li');\n  const menuLi = document.createElement('li');\n  const contactLi = document.createElement('li');\n  const homeLiA = document.createElement('a');\n  const menuLiA = document.createElement('a');\n  const contactLiA = document.createElement('a');\n  navTitle.innerText = 'Pegasus Restaurant';\n  homeLiA.innerText = 'Home';\n  contactLiA.innerText = 'Contact';\n  menuLiA.innerText = 'Menu';\n  nav.setAttribute('class', 'nav-bar');\n  navTitle.setAttribute('class', 'rest-title');\n  navUl.setAttribute('class', 'menu-list');\n  homeLi.setAttribute('class', 'menu-list-item');\n  menuLi.setAttribute('class', 'menu-list-item');\n  contactLi.setAttribute('class', 'menu-list-item');\n  homeLiA.setAttribute('class', 'menu-list-link');\n  menuLiA.setAttribute('class', 'menu-list-link');\n  contactLiA.setAttribute('class', 'menu-list-link');\n\n  homeLiA.setAttribute('id', 'home-link');\n  menuLiA.setAttribute('id', 'menu-link');\n  contactLiA.setAttribute('id', 'contact-link');\n\n  homeLiA.setAttribute('href', '#');\n  menuLiA.setAttribute('href', '#');\n  contactLiA.setAttribute('href', '#');\n\n  nav.appendChild(navTitle);\n  nav.appendChild(navUl);\n  navUl.appendChild(homeLi);\n  navUl.appendChild(menuLi);\n  navUl.appendChild(contactLi);\n  homeLi.appendChild(homeLiA);\n  menuLi.appendChild(menuLiA);\n  contactLi.appendChild(contactLiA);\n\n  return nav;\n};\n\nconst displayFooter = () => {\n  const footer = document.createElement('footer');\n  const title = document.createElement('h5');\n  title.innerText = 'Copyright \\u00A9 Ilie Babcenco';\n  footer.appendChild(title);\n  footer.setAttribute('class', 'footer');\n  title.setAttribute('class', 'copyright');\n  return footer;\n};\n\nconst displayContent = (pageName) => {\n  const content = document.getElementsByClassName('main');\n  for (let i = 0; i < content.length; i += 1) {\n    content[i].style.display = 'none';\n  }\n  document.getElementById(pageName).style.display = 'block';\n};\n\nconst loadPage = () => {\n  const content = document.getElementById('content');\n  content.appendChild(displayNavBar());\n  content.appendChild((0,_mainpage__WEBPACK_IMPORTED_MODULE_0__.default)());\n  content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)());\n  content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)());\n\n  content.appendChild(displayFooter());\n\n  document.getElementById('home-link').onclick = () => { displayContent('mainPage'); };\n  document.getElementById('menu-link').onclick = () => { displayContent('menuPage'); };\n  document.getElementById('contact-link').onclick = () => { displayContent('contactsPage'); };\n};\n\nloadPage();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/mainpage.js":
/*!*************************!*\
  !*** ./src/mainpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayMain = () => {\n  const main = document.createElement('main');\n  const mainTitle = document.createElement('h2');\n  const mainQuote = document.createElement('h5');\n  const mainImg = document.createElement('img');\n\n  mainTitle.innerText = 'Pegasus Restaurant';\n  mainQuote.innerText = 'Culinary traditions worthy of your taste!';\n\n  main.setAttribute('class', 'main');\n  main.setAttribute('id', 'mainPage');\n  mainTitle.setAttribute('class', 'main-title');\n  mainQuote.setAttribute('class', 'main-quote');\n  mainImg.setAttribute('class', 'main-img');\n  mainImg.setAttribute('src', 'assets/images/1.jpg');\n\n  main.appendChild(mainTitle);\n  main.appendChild(mainQuote);\n  main.appendChild(mainImg);\n\n  return main;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMain);\n\n//# sourceURL=webpack://restaurant-page/./src/mainpage.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayMenu = () => {\n  const menu = document.createElement('main');\n  const mainQuote = document.createElement('h5');\n  const mainImg = document.createElement('img');\n\n  const dishes = document.createElement('div');\n  const dish1 = document.createElement('a');\n  const dish2 = document.createElement('a');\n  const dish3 = document.createElement('a');\n\n  const imgDish1 = document.createElement('img');\n  const imgDish2 = document.createElement('img');\n  const imgDish3 = document.createElement('img');\n\n  const parDish1 = document.createElement('p');\n  const parDish2 = document.createElement('p');\n  const parDish3 = document.createElement('p');\n\n  dishes.setAttribute('class', 'dishes');\n\n  dish1.setAttribute('class', 'dish');\n  dish1.setAttribute('href', '#');\n  dish2.setAttribute('class', 'dish');\n  dish2.setAttribute('href', '#');\n  dish3.setAttribute('class', 'dish');\n  dish3.setAttribute('href', '#');\n\n  imgDish1.setAttribute('class', 'img-dish');\n  imgDish1.setAttribute('src', 'assets/images/menu2.jpg');\n  imgDish2.setAttribute('class', 'img-dish');\n  imgDish2.setAttribute('src', 'assets/images/menu3.jpg');\n  imgDish3.setAttribute('class', 'img-dish');\n  imgDish3.setAttribute('src', 'assets/images/menu4.jpg');\n\n  parDish1.setAttribute('class', 'par-dish');\n  parDish1.innerText = 'First Course';\n  parDish2.setAttribute('class', 'par-dish');\n  parDish2.innerText = 'Second Course';\n  parDish3.setAttribute('class', 'par-dish');\n  parDish3.innerText = 'Dessert';\n\n  mainQuote.innerText = 'We use only the best species!';\n\n  menu.setAttribute('class', 'menu, main');\n  menu.setAttribute('id', 'menuPage');\n  mainQuote.setAttribute('class', 'main-quote');\n  mainImg.setAttribute('class', 'main-menu-img');\n  mainImg.setAttribute('src', 'assets/images/menu1.jpg');\n\n  menu.style.display = 'none';\n\n  menu.appendChild(mainImg);\n  menu.appendChild(mainQuote);\n  menu.appendChild(dishes);\n  dishes.appendChild(dish1);\n  dishes.appendChild(dish2);\n  dishes.appendChild(dish3);\n  dish1.appendChild(imgDish1);\n  dish1.appendChild(parDish1);\n  dish2.appendChild(imgDish2);\n  dish2.appendChild(parDish2);\n  dish3.appendChild(imgDish3);\n  dish3.appendChild(parDish3);\n  return menu;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;