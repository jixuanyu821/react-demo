import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimeMachine from './index.jsx'
import ConditionRender from './ConditionalRender.jsx'
// function MessageBox(props){
// return <h1>messageBox!{props.msg}</h1> 
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TimeMachine/>
        <ConditionRender/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="./index1.html"
          target="_blank"
          rel="noopener noreferrer">Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
