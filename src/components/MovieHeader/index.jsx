import React from "react";
import ImgLogo from "../../assets/logo.png";
import "./styles.css";

function MovieHeader({ setMovies, movies }) {
  const sortedMovies = movies.sort(function (a, b) {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  return (
    <header className="movies-header-container">
      <div className="logo-container">
        <img src={ImgLogo} alt="logo" />
      </div>
    </header>
  );
}

export default MovieHeader;
