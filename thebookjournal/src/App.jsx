import React, { createContext, useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookList from "./components/BookList";
import FavoriteBooks from "./components/FavoriteBooks";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";
import "./styles.css";
import Navbar from "./components/Navbar";

// Context API for state management
const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

const App = () => {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [theme, setTheme] = useState("pink");

  useEffect(() => {
    fetch("/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "pink" ? "light" : "pink");
  };

  return (
    <AppContext.Provider value={{ books, setBooks, favorites, setFavorites, theme, toggleTheme }}>
      <Router>
        <nav className="pink-theme">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<><SearchBar /><BookList /></>} />
          <Route path="/favorites" element={<FavoriteBooks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
