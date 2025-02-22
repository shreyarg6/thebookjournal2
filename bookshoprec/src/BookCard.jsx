export default function BookCard({ book, addFavorite }) {
    return (
      <div className="border p-4 rounded shadow-lg">
        <h3 className="text-xl font-bold">{book.title}</h3>
        <p className="text-gray-600">by {book.author}</p>
        <button
          className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
          onClick={() => addFavorite(book)}
        >
          Add to Favorites
        </button>
      </div>
    );
  }
  