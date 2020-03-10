import React, { Component } from 'react';
import logo from './Components/images/Logo.PNG';
import GetData from './Components/GetData/GetData';
import './App.css';

class Logo extends Component {
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Datakwip Front End Test</h1>
        </header>
      </div>
    );
  } 
}

class App extends Component {
  render (){
    return (
      <div className="App">
        <Logo /> 
        <GetData />  
      </div>
    );
  } 
}

export default App;
