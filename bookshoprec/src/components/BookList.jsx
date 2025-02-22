import BookCard from "../BookCard";

export default function BookList({ books, addFavorite }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {books.length > 0 ? (
        books.map((book) => <BookCard key={book.id} book={book} addFavorite={addFavorite} />)
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
}
