const Book = require('../src/book.js');

describe('Book', () => {
  let book;

  beforeEach(() => {
    book = new Book('I Feel Bad About My Neck', 'Nora Ephron', 2006);
  });

  test('book has title', () => {
    expect(book.title).toBe('I Feel Bad About My Neck');
  });

  test('book has author', () => {
    expect(book.author).toBe('Nora Ephron');
  });

  test('book has year', () => {
    expect(book.year).toBe(2006);
  });
});
