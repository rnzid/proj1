//import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Button from './Button';
import Home from './Home';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React change
        </a>
      </header>
    </div>
  );
} */

function App() {
  return<Fragment>
    <div>welcome</div>
    <div>To my site</div>
    <Home/>
    <Button title="Big"/>
    <Button title='small'/>

  </Fragment>
}

export default App;
