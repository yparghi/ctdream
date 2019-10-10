import React, { Component } from "react";


class SwitchableHeader extends Component {
  render(){
    return(
      <div>
        <h3> Hello, World! </h3>
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
        <SwitchHeaderButton switchSelector="Mangoes"/>
        <SwitchHeaderButton switchSelector="Apples"/>
        <SwitchHeaderButton switchSelector="Kiwis"/>
        <SwitchableHeader />
      </div>
    );
  }
}

export default YashApp;

