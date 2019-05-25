import React from 'react';
import logo from './logo.svg';
import Hi from './components/Hi';
import MediaCard from './components/MediaCard';
import Gate from './components/Gate';
import Room from './components/Room';
import Temp from './components/Temp';
import Reddit from './components/Reddit';
import './App.css';

function App() {
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
          Learn React
        </a>
        <Hi name='Megan!' />
        <MediaCard title='Operation moon eye' body='let it begin op moon eye' imgUrl={logo} />
        <Gate isOpen={true}/>
        <Gate isOpen={false}/>
        <Room/>
        <Temp/>
        <Reddit/>
      </header>
    </div>
  );
}

export default App;
