import React, { useState } from "react";
import { useAppContext } from "../App";

const SearchBar = () => {
  const { books, setBooks } = useAppContext();
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setBooks(filteredBooks);
    setQuery(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search books..."
      value={query}
      onChange={handleSearch}
      className="search-bar"
    />
  );
};

export default SearchBar;
