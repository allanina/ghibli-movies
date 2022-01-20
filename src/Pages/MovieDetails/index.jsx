import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";


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
      <div >
        <Link to="/">
          <button>Voltar</button>
        </Link>
      </div>
    </div>
  )
}

export default MovieDetails;
