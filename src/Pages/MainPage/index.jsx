import React, { useEffect, useState } from 'react';

import MovieCard from '../../components/MovieCard';
import MovieHeader from '../../components/MovieHeader';

function MainPage() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then(response => response.json())
            .then(data => setMovies(data))
    }, [])

    return (
            <>
                <MovieHeader />
                <div className="movie-card-container">
                    <MovieCard movies={movies}/>
                </div>
            </>
    )
}

export default MainPage;
