import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };

    this.sayThis = this.sayThis.bind(this);
  }

  sayThis(e) {
    e.preventDefault();
    console.log(this.state.toggle);

    this.setState(prevState => ({
      toggle: !prevState.toggle,
    }));
  }

  render() {
    return (
      <div>
        <input
          type="submit"
          onClick={this.sayThis}
        />
        { this.state.toggle ? 'ON' : 'OFF' }
      </div>
    );
  }
}
