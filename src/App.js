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
      <div id="explanation">
        <a id="close" href="#hide">
          X
        </a>
        <p>
          An RGB color value is specified with: rgb(red, green, blue). <br />
          Each parameter (red, green, and blue) defines the intensity of the
          color as an integer between 0 and 255. <br />
          For example, rgb(0, 0, 255) is rendered as blue, because the blue
          parameter is set to its highest value (255) and the others are set to
          0.
        </p>
      </div>
      <footer>
        <p>Coded by Carmen López @ 2022</p>
      </footer>
    </div>
  );
}

export default App;
