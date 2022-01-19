import "./styles.css";
import React from 'react';

function MovieCard(props) {
    return (
        <div className='movie-card-wrapper'>
            {props.movieCardInfo.map(movie => (
                <div className="movie-card-data">
                    <div className="movie-card">
                        <img className="movie-banner-img" src={movie.image} alt={movie.title} />
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
