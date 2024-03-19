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

export default function validateForm() {
  const form = document.querySelector('.send__form');

  // Отключаем стандартную валидацию браузера при отправке формы
  form.addEventListener('submit', (event) => {
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
