import React from "react";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../Redux/todoslice";

export default function TaskList() {
const task = useSelector(state => state.todos)
const dispatch = useDispatch()

const handleRemoveTask = (todo) =>{
  dispatch(removeTask(todo))
}

  return (
    <div className="container">
      {task.map((todo)=>{
        return <Task key={todo.id} id={todo.id} title={todo.title} description={todo.description} removeTask={() => handleRemoveTask(todo)}  />
      })}
    </div>
  );
}

