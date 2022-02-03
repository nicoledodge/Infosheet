import logo from './logo.svg';
import './App.css';
import {useState} from "react";




function App() {
  const [ cookies, setCookieCount ] = useState('');


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <input
            type="text" onInput={(e)=> setCookieCount(e.target.value)}/>

        <button type="submit" onClick={(e)=> {

          console.log(cookies);
          console.log(`https://swapi.dev/api/people/?search=${cookies}`);

          fetch(`https://swapi.dev/api/people/?search=${cookies}`)
              .then(response => response.json())
              .then(data => {
                console.log(data);
              })

        }}>
          Search
        </button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
