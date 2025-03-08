import React, { useState } from "react";
import { useAppContext } from "../App";
import BookCard from "./BookCard";

const BookList = () => {
  const { books, favorites, setFavorites } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");

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
