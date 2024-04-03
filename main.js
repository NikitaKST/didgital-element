/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('.footer__section-content-button');
  const closeButton = document.querySelector('.send__close-button');
  const send = document.querySelector('.send');

  // Проверяем наличие кнопки открытия модального окна
  if (openButton) {
    openButton.addEventListener('click', () => {
      // Проверяем наличие модального окна
      if (send) {
        // Удаляем класс "send-hidden" для отображения окна
        send.classList.remove('send-hidden');
        // Блокируем скроллинг страницы
        document.body.classList.add('no-scroll');
      } else {
        throw new Error('Элемент с классом ".send" не найден на странице.');
      }
    });
  } else {
    throw new Error('Элемент с классом ".footer__section-content-button" не найден на странице.');
  }

  // Проверяем наличие кнопки закрытия модального окна
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      // Проверяем наличие модального окна
      if (send) {
        // Добавляем класс "send-hidden" для скрытия окна
        send.classList.add('send-hidden');
        // Разблокируем скроллинг страницы
        document.body.classList.remove('no-scroll');
      } else {
        throw new Error('Элемент с классом ".send" не найден на странице.');
      }
    });
  } else {
    throw new Error('Элемент с классом ".send__close-button" не найден на странице.');
  }
});

/***/ }),

/***/ "./src/js/validation.js":
/*!******************************!*\
  !*** ./src/js/validation.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateForm)
/* harmony export */ });
function showMessage(form, message) {
  const successMessage = document.createElement('p');
  successMessage.textContent = message;
  successMessage.classList.add('success-message');
  form.parentNode.appendChild(successMessage);

  // Удаляем сообщение через 3 секунды
  setTimeout(() => {
    successMessage.remove();
  }, 3000);
}
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function validateForm() {
  const form = document.querySelector('.send__form');

  // Отключаем стандартную валидацию браузера при отправке формы
  form.addEventListener('submit', event => {
    event.preventDefault();

    // Получаем значения полей формы
    const fullName = form.querySelector('input[name="full_name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    // Проверяем, что все поля заполнены
    if (!fullName.trim()) {
      showMessage(form, 'Please enter your name');
      return;
    }
    if (!message.trim()) {
      showMessage(form, 'Please enter your message');
      return;
    }

    // Проверяем email
    if (!isValidEmail(email)) {
      showMessage(form, 'Please enter a valid email address');
      return;
    }

    // Отправляем данные на сервер (здесь это имитируется алертом)
    showMessage(form, 'Your message successfully sent');

    // Очищаем поля формы
    form.reset();
  });
}

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/validation */ "./src/js/validation.js");



document.addEventListener('DOMContentLoaded', _js_validation__WEBPACK_IMPORTED_MODULE_2__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map