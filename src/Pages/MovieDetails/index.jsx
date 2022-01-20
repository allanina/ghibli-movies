import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


function MovieDetails() {
  const { id } = useParams();
const [movies, setMovies] = useState([]);

console.log(movies)

useEffect(() => {
  fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
      .then(response => response.json())
      .then(data => setMovies(data))
}, [])

  return (
      <div>
        <img style={{width: '50vh'}} src={movies.image} alt="banner" />
      </div>
  )
}

export default MovieDetails;
