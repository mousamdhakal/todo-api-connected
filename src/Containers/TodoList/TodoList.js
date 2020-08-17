import React from 'react';
import './TodoList.css';

const ToDoList = (props) => {
  let todoList = props.tasks.length ? (
    props.tasks.map((task) => {
      return (
        <div className="todos__list-item" key={task.id}>
          <span
            className={
              task.completed
                ? 'todos__text todos__text--complete'
                : 'todos__text'
            }
          >
            {task.todos}
          </span>
          <button
            className="todos__button todos__button--delete"
            onClick={() => props.deleteTask(task.id)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
          <button
            className="todos__button todos__button--checkbox"
            onClick={() => props.changeTaskStatus(task.id)}
          >
            {task.completed ? (
              <i className="far fa-check-square"></i>
            ) : (
              <i className="far fa-square"></i>
            )}
          </button>
        </div>
      );
    })
  ) : (
    <div className="todos__list-item">
      <span className="todos__text">All tasks completed.</span>
    </div>
  );
  return <div className="todos__list">{todoList}</div>;
};

export default ToDoList;
