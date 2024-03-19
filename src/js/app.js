document.addEventListener('DOMContentLoaded', function () {
  let openButton = document.querySelector('.footer__section-content-button');
  let closeButton = document.querySelector('.send__close-button');
  let send = document.querySelector('.send');

  // Добавляем обработчик события для открытия модального окна
  openButton.addEventListener('click', function () {
      // Удаляем класс "send-hidden" для отображения окна
      send.classList.remove('send-hidden');
  });

  // Добавляем обработчик события для закрытия модального окна
  closeButton.addEventListener('click', function () {
      // Добавляем класс "send-hidden" для скрытия окна
      send.classList.add('send-hidden');
  });
});
