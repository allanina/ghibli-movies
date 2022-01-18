import './App.css';
import ImgLogo from './assets/logo.png';

function App() {
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
          <div className="movie-card">
            teste
          </div>
          <div className="movie-card">
            teste
          </div>
          <div className="movie-card">
            teste
          </div>
          <div className="movie-card">
            teste
          </div>

        </main>
      </main>
    </body>
  );
}

export default App;
