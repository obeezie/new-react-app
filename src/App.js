import React, { Component } from 'react';
import './App.css';
import Hello from './components/Hello';
import Todo from './components/todo';

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Todo />
      </div>

    )
  }
}




export default App;
