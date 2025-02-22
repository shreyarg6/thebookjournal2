export default function FavoriteBooks({ favorites }) {
    return (
      <div className="favorite-books">
        <h2>Favorite Books</h2>
        {favorites.length > 0 ? (
          <ul>
            {favorites.map((book) => (
              <li key={book.id}>{book.title}</li>
            ))}
          </ul>
        ): 
        
        (
          <p>No favorite books were added.</p>
        )}
      </div>
    );
  }
  