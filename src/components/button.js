import React, { Component } from "react";
import autoBind from "auto-bind";

class Showparate extends Component {
  constructor() {
    super();
    autoBind(this);
  }
  render() {
    return (
      <div className="ui">
      <button className="ui black button" onClick={this.props.showAll}>All</button>
      <button className="ui green button" onClick={this.props.showComplete}>Completed</button>
      <button className="ui red button" onClick={this.props.showInactive}>Inactive</button>
    </div>
    );
  }
}

export default Showparate;
