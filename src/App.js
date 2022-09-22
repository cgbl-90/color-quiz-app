import logo from "./logo.svg";
import carmen from "./carmen.svg";
import ColorGame from "./ColorGame";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <img src={carmen} alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="app-logo" alt="logo" />
        </a>
      </header>
      <main>
        <ColorGame />
      </main>
      <footer>
        <p>Coded by Carmen López from Montenegro @ 2022</p>
      </footer>
    </div>
  );
}

export default App;
