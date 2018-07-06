import React, { Component } from 'react';
import {inputForm} from '../components/inputForm/inputForm';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <button className='btn btn-danger'>test</button>
        <inputForm />
      </div>
    );
  }
}

export default App;
