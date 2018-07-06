import React from 'react';

import './InputForm.css';

// defaultInput OBJ is the initial state
const defaultInput = {
  userName: '',
};

class InputForm extends React.Component {
  // state is the data and where it lives
  state = {
    // newUserInput object is initially set to
    //  defaultInput, or the initial state
    newUserInput: defaultInput,
  }

  updateFormNameState = (inputId, e) => {
    const tempName = {...this.state.newUserInput};
    tempName[inputId] = e.target.value;
    console.error('value', e.target.value);
    this.setState({newInput: tempName});
  }

  changeName = e => {
    this.updateFormNameState('userName', e);
  }

  render () {
    return (
      <div className='row'>
        <form onSubmit={this.formSubmit}>
          <label htmlFor='userName'>Enter your name:</label>
          <input
            className=''
            type='text'
            id='userName'
            placeholder='John F. Smith'
            // value={}
            onChange={this.changeName}
          />
          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    );
  }
};

export default InputForm;
