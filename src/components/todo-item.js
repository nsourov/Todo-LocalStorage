import React, { Component } from 'react';
import autoBind from 'react-autobind';

class TodoItem extends Component {
  constructor(){
    super();
    autoBind(this);
  }
  onSaveClick(event, id) {
    event.preventDefault();
    const oldTask = this.props.todo.find(el => el.id === id);
    const newTask = this.refs.editInput.value;
    this.props.saveTodo(oldTask, newTask);
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
                    <i className="checkmark icon middle aligned" onClick={() => this.props.markComplete(el.id)}></i>
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
      } else{
        return (
          <div className="ui inverted segment" key={el.id}>
            <div className="ui inverted relaxed divided list">
              <div className="item">
                <div className="content">
                  <div className="header">
                    <i className="checkmark icon middle aligned" onClick={() => this.props.markComplete(el.id)}></i>
                    <i className="write icon middle aligned" onClick={() => this.props.editTodo(el.id)}></i>
                    <i className="trash outline icon middle aligned" onClick={() => this.props.deleteTodo(el.id)}></i>
                      {
                        !el.isEditing ? el.task : 
                        <form className="ui form edit-form" onSubmit={(e)=>this.onSaveClick(e,el.id)}>
                            <input type="text" ref="editInput" defaultValue={el.task}/>
                        </form> 
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

export default TodoItem;
