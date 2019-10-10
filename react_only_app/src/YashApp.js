import React, { Component } from "react";


class TestOtherComponent extends Component {
  render(){
    return(
      <div>
        <h3> Hello, World! </h3>
        <SwitchHeaderButton switchSelector="Mangoes"/>
      </div>
    );
  }
}

class SwitchHeaderButton extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <button>Hello {this.props.switchSelector}!</button>
      </div>
    );
  }
}

class YashApp extends Component {
  render(){
    return(
      <div className="YashAppClass">
          <TestOtherComponent/>
      </div>
    );
  }
}

export default YashApp;

