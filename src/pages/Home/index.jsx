import React, { useEffect, useState } from "react";
import MovieCards from "../../components/MovieCards";
import MovieHeader from "../../components/MovieHeader";
import "./styles.css";

function MainPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films/")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <section className="home-container">
      <MovieHeader setMovies={setMovies} movies={movies} />
      <div className="movie-card-container">
        <MovieCards movies={movies} />
      </div>
    </section>
  );
}

export default MainPage;
