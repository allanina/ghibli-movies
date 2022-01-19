import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import MovieHeader from './components/MovieHeader';

function App() {
  const [movieCardInfo, setMovieCardInfo] = useState([]);

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films/')
      .then(response => response.json())
      .then(data => setMovieCardInfo(data))
    console.log(movieCardInfo)
  }, [])


  return (
    <body className="App">

      <main className="movies-body">
        <MovieHeader />
        <main className="movie-card-container">
          <MovieCard movieCardInfo={movieCardInfo} />
        </main>
      </main>
    </body>
  );
}

export default App;
