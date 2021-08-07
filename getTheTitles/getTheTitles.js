const getTheTitles = function (books) {
  const getTitles = books.map((book) => `${book.title}`);
  return getTitles;
};

module.exports = getTheTitles;
