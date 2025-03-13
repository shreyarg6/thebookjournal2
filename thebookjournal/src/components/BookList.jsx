import React, { useState } from "react";
import { useAppContext } from "../App";
import BookCard from "./BookCard";
////////////////////////
import Atale from "../assets/atale.jpeg";
import go from "../assets/1984g.png"
import wehide from "../assets/wehide.jpeg";
import percyj from "../assets/PercyJ.jpeg";
import moby from "../assets/moby.jpeg";
import secretG from "../assets/secretG.png";
import hobbit from "../assets/hobbit.png";
import hp1 from "../assets/hp1.png";
import kaiju from "../assets/kaiju.png";
import wlibrary from "../assets/wlibrary.png";
import rosecode from "../assets/rosecode.png";
import hsecret from "../assets/hsecret.png";
import beachread from "../assets/beachreadh.png";
import ironflame from "../assets/ironflame.png";
import houselake from "../assets/houselake.png";
import hellbent from "../assets/hellbent.png";
import gotover from "../assets/gotover.png";

const BookList = () => {
  const { favorites, setFavorites } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [searchBy, setSearchBy] = useState("title");
  
const books = [
  { id: 1, image: Atale, title: "A Tale of Two Cities", author: "by Charles Dickens", summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", genre: "Classic" },
  { id: 2, image: go, title: "1984", author: "by George Orwell", summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", genre: "Sci-Fi" },
  { id: 3, image: percyj, title: "Percy Jackson and the Lightning Thief", series: "Book 1 (Percy Jackson & The Olympians)",author: "by Rick Riordan", summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", genre: "Fantasy" },
  { id: 4, image: secretG, title: "The Secret Garden", author: "by Frances Hodgson", summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", genre: "Classic" },
  { id: 5, image: wehide, title: "Things We Hide From the Light", series: "Book 2 (Knockemout)", author: "by Lucy Score", summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", genre: "Romance" },
  { id: 6, image: moby, title: "Moby Dick", author: "by Herman Melville", summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", genre: "Classic"},
  { id: 7, image: hobbit, title: "The Hobbit", author: "by J.R.R. Tolkien", series: "Prequel (The Lord of the Rings)", genre: "Fantasy", summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", genre: "Fantasy"},
  { id: 8, image: hp1, title: "Harry Potter and the Sorcerer's Stone", series: "Book 1 (Harry Potter)", author: "J.K. Rowling", genre: "Fantasy", summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", genre: "Fantasy"},
  { id: 9, image: kaiju, title: "The Kaiju Preservation Society", author: "by John Scalzi", summary: "A fun sci-fi adventure about a secret organization protecting massive monsters in an alternate dimension.", genre: "Sci-Fi" },
  { id: 11, image: wlibrary, title: "The Woman in the Library", author: "by Sulari Gentill", summary: "A clever mystery where four strangers become suspects in a library murder.", genre: "Mystery" },
  { id: 12, image: rosecode, title: "The Rose Code", author: "by Kate Quinn", summary: "A gripping historical fiction novel about female codebreakers in WWII.", genre: "Historical Fiction" },
  { id: 13, image: hsecret, title: "The Husband’s Secret", author: "by Liane Moriarty", summary: "A psychological thriller about a woman who finds a letter from her husband that changes everything.", genre: "Thriller" },
  { id: 14, image: beachread, title: "Beach Read", author: "by Emily Henry", summary: "A romance between two writers who challenge each other to swap genres for the summer.", genre: "Romance" },
  { id: 15, image: ironflame, title: "Iron Flame", author: "by Rebecca Yarros", series:"Book 1 (The Empyrean)", summary: "The sequel to Fourth Wing, continuing Violet's journey as a dragon rider.", genre: "Fantasy" },
  { id: 16, image: houselake, title: "The House Across the Lake", author: "by Riley Sager", summary: "A psychological thriller where a woman spies on her neighbors, only to witness something terrifying.", genre: "Thriller" },
  { id: 17, image: hellbent, title: "Hell Bent", series: "Book 2 (Alex Stern)", author: "by Leigh Bardugo", summary: "The dark sequel to Ninth House, following Alex Stern as she uncovers deeper secrets in Yale’s secret societies.", genre: "Dark Fantasy" },
  { id: 18, image: gotover, title: "Things We Never Got Over", series: "Book 1 (Knockemout)", author: "by Lucy Score", summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", genre: "Romance" }
];

const handleSearch = (event) => {
    setSearchQuery(event.target.value);
};

const addToFavorites = (book) => {
  if (!favorites.some((fav) => fav.id === book.id)) {
    setFavorites([...favorites, book]);
  }
};

const filteredBooks = books.filter((book) => {
  const matchesTitle = book.title.toLowerCase().includes(searchQuery.toLowerCase());
  const matchesAuthor = book.author.toLowerCase().includes(searchQuery.toLowerCase());

  return (
    (searchBy === "title" && matchesTitle) ||
    (searchBy === "author" && matchesAuthor)) 
    && (selectedGenre === "All" || book.genre === selectedGenre);
});

const handleGenreChange = (e) => {
  setSelectedGenre(e.target.value);
};

const handleSearchByChange = (e) => {
  setSearchBy(e.target.value);
};

return (
  <div>
    <h2>Find any book you want!</h2>
    <input
      type="text"
      placeholder="Search books"
      value={searchQuery}
      onChange={handleSearch}
      style={{ marginRight: "auto" , padding: "10px",  margin: "10px 0" }}
    />

    <select value={searchBy} onChange={handleSearchByChange} style={{ marginRight: "auto" , padding: "10px",  margin: "10px 0", }}>
      <option value="title">Search by Title</option>
      <option value="author">Search by Author</option>
    </select>

    <select value={selectedGenre} onChange={handleGenreChange} style={{ marginRight: "auto" , padding: "10px",  margin: "10px 0" }}>
      <option value="All">All Genres</option>
      <option value="Sci-Fi">Sci-Fi</option>
      <option value="Classic">Classic</option>
      <option value="History">History</option>
      <option value="Romance">Romance</option>
      <option value="Fantasy">Fantasy</option>
      <option value="Dark Fantasy">Dark Fantasy</option>
      <option value="Mystery">Mystery</option>
      <option value="Thriller">Thriller</option>
    </select>

    <div className="book-list">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <div key={book.id} className="book-item">
            <BookCard book={book} />
            <button onClick={() => addToFavorites(book)}>Add to My Books</button>
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