import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>Remaining characters: {this.state.remainingChars} of {this.props.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
