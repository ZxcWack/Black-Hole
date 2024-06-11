document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    const avatarUrl = localStorage.getItem('avatarUrl');

    if (!username || !avatarUrl) {
        alert('Вы не авторизованы!');
        window.location.href = 'index.html';
    }

    document.getElementById('avatar').src = avatarUrl;
    loadBooks();
});

function loadBooks(query = '') {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Очистить текущий список

    fetch(`https://openlibrary.org/search.json?q=${query}`)
        .then(response => response.json())
        .then(data => {
            data.docs.forEach(item => {
                const bookDiv = document.createElement('div');
                bookDiv.className = 'book';
                bookDiv.textContent = `${item.title} - ${item.author_name ? item.author_name.join(', ') : 'Неизвестный автор'}`;
                bookList.appendChild(bookDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching books:', error);
        });
}

function searchBooks() {
    const query = document.getElementById('search').value.toLowerCase();
    loadBooks(query);
}
