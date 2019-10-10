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
        <button onClick={this.props.updateFunc}>
            Hello {this.props.switchSelector}!
        </button>
      </div>
    );
  }
}

class YashApp extends Component {

  printUpdate() {
    console.log("Button clicked!");
  }

  render(){
    return(
      <div className="YashAppClass">
        <SwitchHeaderButton switchSelector="Mangoes" updateFunc={this.printUpdate}/>
        <SwitchHeaderButton switchSelector="Apples" updateFunc={this.printUpdate}/>
        <SwitchHeaderButton switchSelector="Kiwis" updateFunc={this.printUpdate}/>
        <SwitchableHeader />
      </div>
    );
  }
}

export default YashApp;

