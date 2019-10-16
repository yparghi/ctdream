import React, { Component } from "react";


class TtcButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }

    this.buttonClickedLocal = this.buttonClickedLocal.bind(this);
  }

  buttonClickedLocal(e) {
    this.props.clickCall(this.props.squareIdx);
  }

  render(){
    return(
      <button height='20px' width='20px' onClick={this.buttonClickedLocal}>
          {this.props.squareIdx}
      </button>
    );
  }
}


class TicTacToeBoard extends Component {

  constructor(props) {
    super(props);

    this.state = {
        squares: Array(9).fill(null),
    };

    // TODO(Yash): Understand better why this bind call is needed.
    this.boardButtonClicked = this.boardButtonClicked.bind(this);
  }

  boardButtonClicked(squareIdx) {
    console.log("Button clicked!: ", squareIdx);

    // Update a copy of squares before registering that update in setState().
    const newSquares = this.state.squares.slice();
    newSquares[squareIdx] = 'X';

    this.setState(state => ({
      squares: newSquares,
    }));
  }

  render(){
    return(
      <div className="wholeBoard">

      <div className="boardRow">
        {/* TODO(Yash): Make this generic somehow*/}
        <TtcButton
            squareIdx={0}
            clickCall={this.boardButtonClicked}
        />
        <TtcButton
            squareIdx={1}
            clickCall={this.boardButtonClicked}
        />
        <TtcButton
            squareIdx={2}
            clickCall={this.boardButtonClicked}
        />
      </div>
      <div className="boardRow">
      </div>
      <div className="boardRow">
      </div>

      </div>
    );
  }
}

export default TicTacToeBoard;

