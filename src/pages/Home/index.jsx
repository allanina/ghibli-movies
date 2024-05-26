import React, { useEffect, useState } from "react";
import MovieCards from "../../components/MovieCards";
import MovieHeader from "../../components/MovieHeader";
import "./styles.css";
import { getAllMovies } from "../../api/getAllMovies";

function MainPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getAllMovies();
      setMovies(moviesData);
    };

    fetchMovies();
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
