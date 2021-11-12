class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  findBooksByAuthor(author) {
    return this.books.filter((book) => {
      return book.author === author;
    });
  }

  listAuthors() {
    return this.books.map(book => book.author);
  }
}

module.exports = Library;
