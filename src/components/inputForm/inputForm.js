import React from 'react';

import './inputForm.css';

class inputForm extends React.Component {
  render () {
    return (
      <div>
        <form>
          <label htmlFor='userName'>Enter your name:</label>
          <input
            className=''
            type='text'
            id='userName'
            placeholder='John F. Smith'
            value={testInput.userName}
            onChange={this.changeName}
          />
        </form>
      </div>
    );
  }
};

export default inputForm;
