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
