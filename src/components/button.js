import React, { Component } from "react";
import autoBind from 'react-autobind';

class Showparate extends Component {
  constructor() {
    super();
    autoBind(this);
  }
  render() {
    const {todo} = this.props;
    // const completed = todo.find(el => el.isCompleted)
    // console.log(completed)
    let completed = []
    let inactive = []
    for(let i = 0; i < todo.length; i++){
      if(todo[i].isCompleted){
        completed.push(todo[i])
      }else{
        inactive.push(todo[i])
      }
    }
    return (
      <div className="ui">
      <button className="tiny ui black button" onClick={this.props.showAll}>All <span className="tiny ui red circular label">{todo.length}</span></button>
      <button className="tiny ui green button" onClick={this.props.showComplete}>Completed <span className="tiny ui violet circular label">{completed.length}</span></button>
      <button className="tiny ui red button" onClick={this.props.showInactive}>Inactive <span className="tiny ui black circular label">{inactive.length}</span></button>
    </div>
    );
  }
}

export default Showparate;
