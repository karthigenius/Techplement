const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const searchBtn = document.getElementById('search-btn');
const randomBtn = document.getElementById('random-btn');
const searchInput = document.getElementById('author-search');

const API_URL = 'https://api.quotable.io';

function fetchRandomQuote() {
   fetch(`${API_URL}/random`)
      .then(response => response.json())
      .then(data => {
         quoteElement.innerText = `"${data.content}"`;
         authorElement.innerText = `- ${data.author}`;
      });
}

function fetchQuoteByAuthor(author) {
   fetch(`${API_URL}/quotes?author=${author}`)
      .then(response => response.json())
      .then(data => {
         if (data.results.length > 0) {
            quoteElement.innerText = `"${data.results[0].content}"`;
            authorElement.innerText = `- ${data.results[0].author}`;
         } else {
            quoteElement.innerText = "No quotes found for this author.";
            authorElement.innerText = "";
         }
      });
}

randomBtn.addEventListener('click', fetchRandomQuote);

searchBtn.addEventListener('click', () => {
   const author = searchInput.value;
   if (author) {
      fetchQuoteByAuthor(author);
   }
});

fetchRandomQuote();
