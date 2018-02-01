import React, { Component } from 'react';
import autoBind from 'auto-bind';
import uuid from 'uuid';
import CreateTodo from './components/create-todo';
import TodoItem from './components/todo-item';
import Showparate from './components/button';
import CompleteTodo from './components/completeTodo';
import InactiveTodo from './components/inactiveTodo';

class App extends Component {
  constructor(){
    super();
    autoBind(this);
    this.state = {
      todos: [],
      showAll: true,
      showInactive: false,
      showComplete: false
    }
  }
  createTodo(task){
    this.state.todos.push({
    id: uuid(),
    task,
    isCompleted: false,
    isEditing: false
  });
  this.setState({todos: this.state.todos});
  localStorage.setItem('Todo', JSON.stringify(this.state.todos))
  }
  deleteTodo(id){
    this.setState({todos: this.state.todos.filter(el => el.id !== id)})
    localStorage.setItem('Todo', JSON.stringify(this.state.todos.filter(el => el.id !== id)))
  }
  editTodo(id){
    const todo = this.state.todos.find(el => el.id === id);
    todo.isEditing = !todo.isEditing
    this.setState({todos: this.state.todos})
  }
  saveTodo(oldTask, newtask){
    const todo = this.state.todos.find(todo => todo.task === oldTask.task);
    todo.task = newtask;
    todo.isEditing = false
    this.setState({todos: this.state.todos})
    localStorage.setItem('Todo', JSON.stringify(this.state.todos))
  }
  markComplete(id){
    const todo = this.state.todos.find(el => el.id === id);
    todo.isCompleted = !todo.isCompleted
    this.setState({todos: this.state.todos})
    localStorage.setItem('Todo', JSON.stringify(this.state.todos))
  }
  showAll(){
    this.setState({
      todos: this.state.todos,
      showAll: true,
      showInactive: false,
      showComplete: false
    })
  }
  showComplete(){
    this.setState({
      todos: this.state.todos,
      showAll: false,
      showInactive: false,
      showComplete: true
    })
  }
  showInactive(){
    this.setState({
      todos: this.state.todos,
      showAll: false,
      showInactive: true,
      showComplete: false
    })
  }
  renderTodo(){
    if(this.state.showAll){
      return ( 
        <TodoItem 
          todo={this.state.todos} 
          markComplete={this.markComplete} 
          editTodo={this.editTodo} 
          saveTodo={this.saveTodo}
          deleteTodo={this.deleteTodo}
        />
      )
    } else if(this.state.showComplete){
      return ( 
        <CompleteTodo
          todo={this.state.todos}
          deleteTodo={this.deleteTodo}
        />
      )
    } else{
      return(
        <InactiveTodo
          todo={this.state.todos} 
          markComplete={this.markComplete} 
          editTodo={this.editTodo} 
          saveTodo={this.saveTodo}
          deleteTodo={this.deleteTodo}
        />
      )
    }
  }
  componentWillMount(){
    const todos = JSON.parse(localStorage.getItem('Todo')) || []
    this.setState({
      todos,
      showAll: true,
      showInactive: false,
      showComplete: false
    })
  }
  render() {
    const renderTodo = this.renderTodo()
    return (
      <div className="ui container tall stacked segment compact">
        <h1>Todo App</h1>
        <CreateTodo
          createTodo={this.createTodo}
          todo={this.state.todos}
        />
        <br/>
        <Showparate 
          showAll={this.showAll}
          showComplete={this.showComplete}
          showInactive={this.showInactive}
        />
        <br/>
        {renderTodo}
      </div>
    );
  }
}

export default App;
