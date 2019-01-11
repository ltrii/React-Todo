import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ''
    };
  }

  addTodo = ev => {
    ev.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: '' });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompletedTodos = e => {
    e.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div class="todoholder">
      <h1>To-do List</h1>
        <div>
          <TodoList
            handleToggleComplete={this.toggleTodoComplete}
            todos={this.state.todos}
          />
          <div class="formcontain">
            <TodoForm
              value={this.state.todo}
              handleTodoChange={this.changeTodo}
              handleAddTodo={this.addTodo}
              handleClearTodos={this.clearCompletedTodos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
