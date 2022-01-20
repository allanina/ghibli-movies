import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import MovieHeader from './components/MovieHeader';
import MovieModal from './components/MovieModal';

function App() {
  const [movieCardInfo, setMovieCardInfo] = useState(null);




  return (
    <body className="App">
      <main className="movies-body">
        <MovieHeader />
        <div className="movie-card-container">
          <MovieCard setMovieInfo={setMovieCardInfo} />
          <MovieModal movieInfo={movieCardInfo}/>
        </div>
      </main>
    </body>
  );
}

export default App;
