import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleMovie } from "../../api/getMovie";

function MovieDetails() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  console.log(movies);

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await getSingleMovie(id);
      setMovies(movieData);
    };

    fetchMovie();
  }, [id]);

  return (
    <div className="movie-details-wrapper">
      <div className="movie-details-return-btn">
        <Link to="/">
          <button>Voltar</button>
        </Link>
      </div>
      <div className="movie-details-poster-wrapper">
        <div className="movie-details-poster-container">
          <img src={movies.image} alt="movie poster" />
        </div>
        <div className="movie-details-info">
          <h1>{movies.title}</h1>
          <h3>
            {movies.original_title} ({movies.original_title_romanised})
          </h3>
          <div className="movie-details-director-rating">
            <h4>
              {movies.director} - {movies.release_date} - {movies.running_time}
              min
            </h4>
            <span>Nota: {(movies.rt_score * 0.1).toFixed(1)}</span>
          </div>
          <p>{movies.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
