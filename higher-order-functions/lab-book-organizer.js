const books = [
  {
    title: "The Pragmatic Programmer",
    authorName: "Andrew Hunt and David Thomas",
    releaseYear: 1999
  },
  {
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    authorName: "Robert C. Martin",
    releaseYear: 2008
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    authorName: "Harold Abelson and Gerald Jay Sussman",
    releaseYear: 1985
  },
  {
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    authorName: "Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides",
    releaseYear: 1994
  },
  {
    title: "The Art of Computer Programming",
    authorName: "Donald Knuth",
    releaseYear: 1968
  }
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } 
  return 0
}

const filteredBooks = books.filter(book => book.releaseYear < 1999);
filteredBooks.sort(sortByYear);
console.log(sortByYear(books[0], books[1]));
console.log(filteredBooks);

