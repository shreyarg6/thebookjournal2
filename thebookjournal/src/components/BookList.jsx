import React, { useState } from "react";
import { useAppContext } from "../App";
import BookCard from "./BookCard";

const BookList = () => {
  const { favorites, setFavorites } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");

  // Manually defined book list
  const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen" },
    { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 5, title: "Moby Dick", author: "Herman Melville" },
  ];

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const addToFavorites = (book) => {
    if (!favorites.some((fav) => fav.id === book.id)) {
      setFavorites([...favorites, book]);
    }
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Book List</h2>
      <input
        type="text"
        placeholder="Search books..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-item">
              <BookCard book={book} />
              <button onClick={() => addToFavorites(book)}>Add to Favorites</button>
            </div>
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
};

export default BookList;
