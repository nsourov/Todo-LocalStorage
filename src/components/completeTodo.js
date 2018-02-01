import React, { Component } from 'react';
import autoBind from 'react-autobind';

class CompleteTodo extends Component {
  constructor(){
    super();
    autoBind(this);
  }
  renderTodo(){
    const {todo} = this.props;
    let showTodo;
    const colorStyle = {
      color: '#2ecc71'
    }
    showTodo = todo.map(el => {
      if(el.isCompleted){
        return (
          <div className="ui inverted segment" key={el.id}>
            <div className="ui inverted relaxed divided list">
              <div className="item">
                <div className="content">
                  <div className="header" style={colorStyle}>
                    <i className="trash outline icon middle aligned" onClick={() => this.props.deleteTodo(el.id)}></i>
                      {
                        el.task
                      }
                  </div>
                </div>
              </div>
            </div>
          </div>
          );
      }
    })
    return showTodo
  }
  render() {
    const showTodo = this.renderTodo()
    return(
      <div>
        {showTodo}
      </div>
    )
  }
}

export default CompleteTodo;
