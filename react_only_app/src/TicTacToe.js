import React, { Component } from "react";


class TtcButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render(){
    return(
      <button height='20px' width='20px'>{this.props.squareIdx}</button>
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
            onClick={() => this.boardButtonClicked(this.props.squareIdx)}
        />
        <TtcButton
            squareIdx={1}
            onClick={() => this.boardButtonClicked(this.props.squareIdx)}
        />
        <TtcButton
            squareIdx={2}
            onClick={() => this.boardButtonClicked(this.props.squareIdx)}
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

