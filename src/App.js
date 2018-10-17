import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends Component {
  render() {
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
        </header>
class App extends React.Component{
  constructor(){
    super();
      this.state = {
          counter: 0
      }
    }

    renderButtonComponent = (text, callback) => {
      return(
        <button onClick = { callback }>{text}</button>
      );
    }

  
  render(){
    return(
      <div>
      <h1>Counter: {this.state.counter} </h1>
        { this.renderButtonComponent('Increment',() => this.setState({ counter: this.state.counter +1})) }
        { this.renderButtonComponent('Decrement',() => this.setState( {counter: this.state.counter -1})) } 
      </div>
    );

  }
  
}

export default App;
