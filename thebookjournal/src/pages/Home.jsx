import React, { useState } from "react";

const Home = () => {
  return (
    <>
      <div className="container">
      <h1>The Book Journal</h1>
      {/* align-items: center; */}
      <div className="row">
      <div className="column left">
        <h2>CURRENTLY READING</h2>
        <h2>2025 READING CHALLENGE</h2>
        

        <h2>WANT TO READ</h2>
        <h2>BOOKSHELVES</h2>
        <div style={{flexDirection: "column", gap: "10px" }}>
          <button type="button">Want to Read</button>
          <button type="button">Currently</button>
          <button type="button">Read</button>
          <button type="button">DNF</button>
          <button type="button">Favorites</button>
        </div>
      </div>
      <div className="column middle">
        <h2>📢 NEW RELEASES & UPDATES!</h2>
        <p>Content for the right column.</p>
      </div>
      <div className="column right">
        <h2>NEWS & INTERVIEWS</h2>
        <p>Content for the right column.</p>
      </div>
    </div>
    </div>

    </>

    

  );
};

export default Home;
