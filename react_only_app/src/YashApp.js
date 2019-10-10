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

    // TODO(Yash): Learn more why this is needed.
    this.callParent = this.callParent.bind(this);
  }

  callParent(e) {
    this.props.updateFunc(this.props.switchSelector);
  }

  render(){
    return(
      <div>
        <button onClick={this.callParent}>
            Hello {this.props.switchSelector}!
        </button>
      </div>
    );
  }
}

class YashApp extends Component {

  printUpdate(something) {
    console.log("Button clicked!: ", something);
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

