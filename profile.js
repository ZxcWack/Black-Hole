document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    const avatarUrl = localStorage.getItem('avatarUrl');

    if (!username || !avatarUrl) {
        alert('Вы не авторизованы!');
        window.location.href = 'index.html';
    }

    document.getElementById('username').textContent = username;
    document.getElementById('avatar').src = avatarUrl;
});
