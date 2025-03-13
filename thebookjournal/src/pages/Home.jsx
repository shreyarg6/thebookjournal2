import React, { useState } from "react";
import col1pic from "../assets/column1pic.png"
import wantto from "../assets/wantTo.png"

const Home = () => {
  return (
    <>
      <div className="container">
      <h1>The Book Journal</h1>
      {/* align-items: center; */}
      <div className="row">
      <div className="column left">
        <h2>CURRENTLY READING</h2>
        <h3 style={{ color:"rgb(34, 90, 103)" }}>A Tale of Two Cities</h3>
        <h2>2025 READING CHALLENGE</h2>
        <h3>1/45 Books Completed</h3>
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
        <div style={{top: "50%", right: "50px", transform: "translateY(-50%)", width: "400px", position: "relative"}}>
          <img src={col1pic} alt="col1pic" />
        </div>
      </div>
      <div className="column right">
        <h2>NEWS & INTERVIEWS</h2>
        <h3 style={{ color:"rgb(34, 90, 103)" }}>Readers' Most Anticipated Books for March</h3>
      </div>
    </div>
    </div>

    </>

    

  );
};

export default Home;
