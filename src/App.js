import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>INGENIO SGI</h1>
          <h5>¡Generamos la ventaja competitiva que su empresa necesita!</h5>
        </p>
        <a
          className="App-link"
          href="https://ingeniosgi.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visita Nuestro Sitio Web
        </a>
      </header>
    </div>
  );
}

export default App;
