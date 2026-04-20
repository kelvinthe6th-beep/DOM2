const flatbook = {
  name: "Flatbook",
  books: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
      url: "https://openlibrary.org/works/OL27609W/The_Great_Gatsby",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "https://covers.openlibrary.org/b/isbn/9780060935467-L.jpg",
      url: "https://openlibrary.org/works/OL82563W/To_Kill_a_Mockingbird",
    },
    {
      title: "1984",
      author: "George Orwell",
      image: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
      url: "https://openlibrary.org/works/OL73415W/1984",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      image: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
      url: "https://openlibrary.org/works/OL14986744W/Pride_and_Prejudice",
    },
  ],
};

const storeTitle = document.getElementById("store-title");
storeTitle.textContent = `${flatbook.name} Bookstore`;

const bookList = document.getElementById("book-list");

flatbook.books.forEach((book) => {
  const bookContainer = document.createElement("article");
  bookContainer.className = "book-container";

  const bookImage = document.createElement("img");
  bookImage.className = "book-image";
  bookImage.src = book.image;
  bookImage.alt = `${book.title} cover`;

  const bookTitleLink = document.createElement("a");
  bookTitleLink.className = "book-link";
  bookTitleLink.href = book.url;
  bookTitleLink.target = "_blank";
  bookTitleLink.rel = "noopener noreferrer";
  bookTitleLink.textContent = book.title;

  const bookAuthor = document.createElement("p");
  bookAuthor.className = "book-author";
  bookAuthor.textContent = `by ${book.author}`;

  bookContainer.append(bookImage, bookTitleLink, bookAuthor);
  bookList.appendChild(bookContainer);
});