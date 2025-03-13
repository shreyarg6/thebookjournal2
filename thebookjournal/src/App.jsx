import React, { createContext, useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, HashRouter } from "react-router-dom";
//import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
// import About from "./pages/About";
import Community from "./pages/Community";
import BookList from "./pages/Books";
import FavoriteBooks from "./pages/Favorites";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";
import "./styles.css";
import navIcon from "./assets/navbaricons.png"

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
      {/* <HashRouter>

      </HashRouter> */}
      <HashRouter>
        <nav className="pink-theme" >
          <ul>
            <li style={{ fontSize: "25px", fontWeight: "light", marginRight: "0px", marginLeft: "10px" }}>book</li><li style={{ fontSize: "25px", fontWeight: "bold", marginRight: "20px" }}>journal</li>
            <li ><Link to="/">Home</Link></li>
            <li><Link to="/favorites">My Books</Link></li>
            <li><Link to="/books">Browse ▼</Link></li>
            <li><a href="/Books.html">Browse ▼</a></li>

            {/* <li><Link to="/wishlistpage">Wishlist</Link></li> */}
            {/* <li><Link to="/about">About</Link></li> */}
            <li><Link to="/community">Community ▼</Link></li>
            <li style={{ marginRight: "auto" , padding: "30px",  margin: "10px 0" }}>{<SearchBar />}</li>
          </ul>
          <div style={{ position: "absolute", top: "50%", right: "50px", transform: "translateY(-50%)" }}>
            <img src={navIcon} alt="Icons" />
          </div>

          
        </nav>
        {/* <ThemeToggle /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/favorites" element={<FavoriteBooks />} />
          {/* <Route path="/wishlistpage" element={<Wishlist />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/community" element={<Community />} />
        </Routes>
      </HashRouter>
    </AppContext.Provider>
  );
};

export default App;
