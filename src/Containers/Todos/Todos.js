import React, { Component } from "react";
import ToDoList from "../TodoList/TodoList";
import AddTask from "../AddTask/AddTask";
import "./Todos.css";

class Todos extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { id: 1, text: "Make bed", complete: true },
        { id: 2, text: "Do assignment", complete: false },
        { id: 3, text: "Play football", complete: false },
      ],
      count: 4,
    };
  }

  deleteTask = (id) => {
    let tasks = this.state.tasks.filter((task) => {
      return task.id !== id;
    });
    this.setState({ tasks });
  };

  addTask = (task) => {
    task.id = this.state.count;
    let tasks = [...this.state.tasks, task];
    this.setState({
      tasks: tasks,
      count: this.state.count + 1,
    });
  };

  changeTaskStatus = (id) => {
    let tasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    });
    this.setState({
      tasks,
    });
  };

  filterTasks = (tasks) => {
    if (this.props.display === "all") {
      return tasks;
    }

    if (this.props.display === "completed") {
      return tasks.filter((task) => task.complete);
    }

    if (this.props.display === "incomplete") {
      return tasks.filter((task) => !task.complete);
    }
  };

  searchTasks = () => {
    if (this.props.show) {
      return this.filterTasks(
        this.state.tasks.filter((task) => {
          const lc = task.text.toLowerCase();
          const filter = this.props.searchText.toLowerCase();
          return lc.includes(filter);
        })
      );
    } else {
      return this.filterTasks(this.state.tasks);
    }
  };

  render() {
    return (
      <>
        <AddTask addTask={this.addTask} />
        <ToDoList
          tasks={this.searchTasks()}
          deleteTask={this.deleteTask}
          changeTaskStatus={this.changeTaskStatus}
        />
      </>
    );
  }
}

export default Todos;
