import React, { Component } from "react";
import autoBind from "auto-bind";

class CreateTodo extends Component {
  constructor() {
    super();
    autoBind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const createInput = this.refs.input;
    const task = createInput.value;
    const validateInput = this.validateInput(task);
    if (validateInput) {
      this.setState({ error: validateInput });
      return;
    }
    this.setState({ error: null });
    this.props.createTodo(task);
    this.refs.input.value = "";
  }
  validateInput(task) {
    if (!task || !task.trim('')) {
        return 'Please enter a task.';
    } else {
        return null;
    }
}
  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <input type="text" ref="input" placeholder="What's Your Focus Today"/>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateTodo;
