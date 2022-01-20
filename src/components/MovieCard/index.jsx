import { Rating } from "@mui/material";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";

function MovieCard({ movies }) {
    const { id } = useParams();

    return (
        <div className='movie-card-wrapper'>
            {movies.map(movie => (
                <div className="movie-card-data" key={movie.id}>
                    <div className="movie-card">
                        <Link to={`/${movie.id}`}>
                            <img className="movie-banner-img" src={movie.image} alt={movie.title} />
                        </Link>
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
