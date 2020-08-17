import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToDoList from '../TodoList/TodoList';
import AddTask from '../AddTask/AddTask';
import './Todos.css';
import * as todosActions from '../../actions/todosActions';
import {
  getAllTodo,
  addTodo,
  updateTodo,
  deleteTodo,
} from '../../services/http';

class Todos extends Component {
  constructor(props) {
    super(props);

    getAllTodo((todos) => this.props.setTodos(todos));
  }

  deleteTask = (id) => {
    let tasks = this.props.todos.filter((todo) => {
      return todo.id !== id;
    });
    let data = {
      id: id,
    };
    deleteTodo(data, () => {
      this.props.setTodos(tasks);
    });
  };

  addNewTask = (text) => {
    let newTask = {
      todo: text,
      completed: false,
    };
    addTodo(newTask, (todo) => {
      let todoAdded = {
        id: todo.id,
        todos: todo.todo,
        completed: todo.completed,
      };
      this.props.setTodos([...this.props.todos, todoAdded]);
    });
  };

  changeTaskStatus = (id) => {
    let thisTask;
    let updatedTodos = this.props.todos.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
        thisTask = task;
      }
      return task;
    });
    let updatedTask = {
      id: thisTask.id,
      todo: thisTask.todos,
      completed: thisTask.completed,
    };
    updateTodo(updatedTask, () => {
      this.props.setTodos(updatedTodos);
    });
  };

  filterTasks = (tasks) => {
    if (this.props.display === 'all') {
      return tasks;
    }

    if (this.props.display === 'completed') {
      return tasks.filter((task) => task.completed);
    }

    if (this.props.display === 'incomplete') {
      return tasks.filter((task) => !task.completed);
    }
  };

  searchTasks = () => {
    if (this.props.show) {
      return this.filterTasks(
        this.props.todos.filter((task) => {
          const lc = task.todos.toLowerCase();
          const filter = this.props.searchText.toLowerCase();
          return lc.includes(filter);
        })
      );
    } else {
      return this.filterTasks(this.props.todos);
    }
  };

  render() {
    return (
      <>
        <AddTask addTask={this.addNewTask} />
        <ToDoList
          tasks={this.searchTasks()}
          deleteTask={this.deleteTask}
          changeTaskStatus={this.changeTaskStatus}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state.todo.todos };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTodos: (todos) => {
      dispatch(todosActions.setTodos(todos));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
