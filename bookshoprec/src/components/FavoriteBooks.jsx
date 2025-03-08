import React from "react";
import { useAppContext } from "../App";
import BookCard from "./BookCard";

const FavoriteBooks = () => {
  const { favorites } = useAppContext();

  return (
    <div className="favorite-books">
      <h2>Favorite Books</h2>
      {favorites.length > 0 ? (
        favorites.map((book) => <BookCard key={book.id} book={book} />)
      ) : (
        <p>No favorite books added yet.</p>
      )}
    </div>
  );
};

export default FavoriteBooks;
