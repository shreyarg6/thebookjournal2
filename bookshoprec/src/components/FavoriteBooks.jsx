export default function FavoriteBooks({ favorites }) {
    return (
      <div className="mt-6 p-4 border rounded shadow-md">
        <h2 className="text-2xl font-bold">Favorite Books</h2>
        {favorites.length > 0 ? (
          <ul className="mt-2">
            {favorites.map((book) => (
              <li key={book.id} className="border-b py-2">{book.title}</li>
            ))}
          </ul>
        ) : (
          <p>No favorite books added.</p>
        )}
      </div>
    );
  }
  