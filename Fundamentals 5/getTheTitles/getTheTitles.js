const getTheTitles = function(books) {
const titles = books.map(book => book.title);
return titles;
}

module.exports = getTheTitles;
