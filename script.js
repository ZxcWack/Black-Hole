document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const login = document.getElementById('login').value;
  const password1 = document.getElementById('password1').value;
  const password2 = document.getElementById('password2').value;

  if (password1 !== password2) {
      alert('Пароли не совпадают!');
      return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || {};

  if (users[login]) {
      alert('Пользователь с таким логином уже существует!');
      return;
  }

  users[login] = password1;
  localStorage.setItem('users', JSON.stringify(users));

  alert('Регистрация успешна!');
  window.location.href = 'login.html';
});
