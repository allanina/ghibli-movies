import { useEffect, useState } from 'react';
import './App.css';
import ImgLogo from './assets/logo.png';

function App() {
  const [movieCard, setMovieCard] = useState([]);

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films/')
      .then(response => response.json())
      .then(data => setMovieCard(data))
    console.log(movieCard)
  }, [])


  return (
    <body className="App">

      <main className="movies-body">
        <header className="movies-container">
          <div className="logo-container">
            <img src={ImgLogo} alt="logo" />
          </div>

          <div className="search-container">
            <div className="search-input">
              <input type="search" />
            </div>

            <div className="btn-container">
              <button>Nota</button>
              <button>Duração</button>
              <button>Lançamento</button>
            </div>
          </div>
        </header>
        <main className="movie-card-container">
          {movieCard.map(movie => (
            <div className="movie-card">
              <img className="movie-banner-img"  src={movie.image} alt={movie.title}/>
            </div>
          ))}
        </main>
      </main>
    </body>
  );
}

export default App;
