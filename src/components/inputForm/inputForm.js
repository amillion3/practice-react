import React from 'react';

import './InputForm.css';

// defaultInput OBJ is the initial state
const defaultInput = {
  userName: '',
};

class InputForm extends React.Component {

  // state is the data and where it lives
  state = {
    // newInput object is initially set to
    //  defaultInput, or the initial state
    newInput: defaultInput,
  }

  updateKeyStrokes = e => {
    const tempName = {...this.state.newInput};
    tempName['username'] = e.target.value;
    this.setState({newInput: tempName})
  }

  render () {
    const { testInput } = this.state;
    return (
      <div className='row'>
        <form onSubmit={this.formSubmit}>
          <label htmlFor='userName'>Enter your name:</label>
          <input
            className=''
            type='text'
            id='userName'
            placeholder='John F. Smith'
            value={}
            onChange={}
          />
          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    );
  }
};

export default InputForm;
