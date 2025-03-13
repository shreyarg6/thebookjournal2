import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="book-card" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      
      {/* Left Column - Image */}
      <div className="book-image" style={{ flex: "0 0 150px" }}>
        <img 
          src={book.image} 
          alt={book.title} 
          style={{ width: "150px", height: "auto", objectFit: "cover", borderRadius: "8px" }} 
        />
      </div>

      {/* Right Column - Text Content */}
      <div className="book-details" style={{ flex: "1" }}>
        <h3>{book.title}</h3>
        <h4 style={{ fontStyle: "italic" }}>{book.series}</h4>
        <p>{book.author}</p>
        <p>{book.summary}</p>
        {/* <p>{book.genre}</p> */}
      </div>

    </div>

  );
};

export default BookCard;
