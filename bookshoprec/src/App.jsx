import { useState } from "react";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import FavoriteBooks from "./components/FavoriteBooks";
import ThemeToggle from "./components/ThemeToggle";
import "./styles.css";

const booksData = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" }
];

export default function App() {
  const [books, setBooks] = useState(booksData);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addFavorite = (book) => {
    if (!favorites.some(fav => fav.id === book.id)) {
      setFavorites([...favorites, book]);
    }
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="items">
      <ThemeToggle />
      <SearchBar setSearchTerm={setSearchTerm} />
      <BookList books={filteredBooks} addFavorite={addFavorite} />
      <FavoriteBooks favorites={favorites} />
    </div>
  );
}
