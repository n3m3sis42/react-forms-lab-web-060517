import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      invalid: true,
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
    this.validate(event)
  }

  validate = (event) => {
    let poem = event.target.value
    let lines = poem.split('\n')
    let lineLengths = lines.map((line) => {return line.replace(/(\s+)/g,' ').trim().split(" ").length})
    if (String(lineLengths) === String([5, 3, 5])) {
      this.setState({
        invalid: false
      })
    } else {
      this.setState({
        invalid: true

      })
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {this.state.invalid && <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
