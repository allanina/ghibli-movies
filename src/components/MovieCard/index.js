import "./styles.css";
import React, { useEffect, useState } from 'react';

function MovieCard({setMovieInfo}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then(response => response.json())
            .then(data => setMovies(data))
        console.log(movies)
    }, [])

    return (
        <div className='movie-card-wrapper'>
            {movies.map(movie => (
                <div className="movie-card-data" key={movie.id}>
                    <div className="movie-card">
                        <img className="movie-banner-img" onClick={e => setMovieInfo(movie)} src={movie.image} alt={movie.title} />
                    </div>
                    <div className="movie-banner-movie-title">
                        <span>{movie.title}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieCard;
