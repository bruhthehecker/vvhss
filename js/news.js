// news.js

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const newsArticles = document.getElementById('newsArticles');
    
    function filterNews() {
        const searchTerm = searchInput.value.toLowerCase();
        const articles = newsArticles.getElementsByClassName('news-item');

        for (let i = 0; i < articles.length; i++) {
            const title = articles[i].getElementsByTagName('h3')[0].textContent.toLowerCase();
            const content = articles[i].getElementsByTagName('p')[0].textContent.toLowerCase();
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                articles[i].style.display = '';
            } else {
                articles[i].style.display = 'none';
            }
        }
    }

    searchButton.addEventListener('click', filterNews);
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            filterNews();
        }
    });
});
