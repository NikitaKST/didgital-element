document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('.footer__section-content-button');
  const closeButton = document.querySelector('.send__close-button');
  const send = document.querySelector('.send');

  // Добавляем обработчик события для открытия модального окна
  openButton.addEventListener('click', () => {
    // Удаляем класс "send-hidden" для отображения окна
    send.classList.remove('send-hidden');
    // Блокируем скроллинг страницы
    document.body.classList.add('no-scroll');
  });

  // Добавляем обработчик события для закрытия модального окна
  closeButton.addEventListener('click', () => {
    // Добавляем класс "send-hidden" для скрытия окна
    send.classList.add('send-hidden');
    // Разблокируем скроллинг страницы
    document.body.classList.remove('no-scroll');
  });
});
