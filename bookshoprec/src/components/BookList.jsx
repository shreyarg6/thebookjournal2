import BookCard from "../BookCard";

export default function BookList({ books, addFavorite }) {
  return (
    <div className="book-items">
      {books.length > 0 ? (
        books.map((book) => <BookCard key={book.id} book={book} addFavorite={addFavorite} />)
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
}
