const Book = require('../src/book.js');
const Library = require('../src/library.js');

describe('Library', () => {
  let library;

  beforeEach(() => {
    library = new Library('CodeClan Library');
  });

  test('library has name', () => {
    expect(library.name).toBe('CodeClan Library');
  });

  test('library initially has empty array of books', () => {
    expect(library.books).toEqual([]);
  })

  test('library can add book', () => {
    const book = new Book('I Feel Bad About My Neck', 'Nora Ephron', 2006);
    library.addBook(book);
    expect(library.books).toContain(book);
  });

  test('library can find books by author', () => {
    const book1 = new Book('I Feel Bad About My Neck', 'Nora Ephron', 2006);
    library.addBook(book1);

    const book2 = new Book('Broken Glass', 'Alain Mabanckou', 2005);
    library.addBook(book2);

    const foundBooks = library.findBooksByAuthor('Nora Ephron');
    expect(foundBooks).toContain(book1);
  });

  test('library can give list of authors', () => {
    const book1 = new Book('I Feel Bad About My Neck', 'Nora Ephron', 2006);
    library.addBook(book1);

    const book2 = new Book('Broken Glass', 'Alain Mabanckou', 2005);
    library.addBook(book2);

    expect(library.listAuthors()).toEqual(['Nora Ephron', 'Alain Mabanckou']);
  });
});
