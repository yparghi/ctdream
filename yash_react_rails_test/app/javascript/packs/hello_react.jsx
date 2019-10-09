import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// Yash's first component

class YashComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {message: 'unclicked' };

    // TODO(Yash): Understand better why this is needed.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      message: 'Clicked!'
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Hello Yash {this.props.name}!</p>
        <p>State is: {this.state.message}</p>
      </div>
    );
  }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <YashComponent name="stub_name"/>,
    document.body.appendChild(document.createElement('div')),
  )
})

