export default function BookCard({ book, addFavorite }) {
    return (
      <div className="book-card">
        <h3>{book.title}</h3>
        <p>by {book.author}</p>
        <button
          className="add"
          onClick={() => addFavorite(book)}
        >
          Add to Favorites
        </button>
      </div>
    );
  }
  