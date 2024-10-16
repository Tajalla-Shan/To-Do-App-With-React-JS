import React from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../Redux/todoslice";

export default function TaskList() {
  const task = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemoveTask = (todo) => {
    dispatch(removeTask(todo));
  };

  return (
    <div className="container justify-content-center w-100 w-md-75 w-lg-50 p-5">
      {task.map((todo) => {
        return (
          <Task
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            removeTask={() => handleRemoveTask(todo)}
            checked={todo.checked}
          />
        );
      })}
      <TaskForm />
    </div>
  );
}
