import React, { Component } from 'react';
import InputForm from '../components/InputForm/InputForm';
import './App.css';

class App extends Component {

  formSubmitEvent = newInput => {
    console.error(newInput);
  }

  render () {
    return (
      <div className="App">
        <InputForm onSubmit={this.formSubmitEvent}></InputForm>
      </div>
    );
  }
}

export default App;
