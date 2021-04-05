import logo from './logo.svg';
import './App.css';
import ResultBox from './Components/ResultBox';
import Home from './Page/Home';
import Clubs from './Page/Clubs';
import data from './data.js';

function App() {
  const { competitions, clubs, teams } = data;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clubs clubs={clubs} />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <ResultBox hRef='/results/4' home='24' away='36' />
        {/* <Home competitions={competitions} /> */}
      </header>
    </div>
  );
}

export default App;
