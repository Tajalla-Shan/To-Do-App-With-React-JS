import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/todoslice";

export default function TaskForm() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [showForm , setShowForm] = useState(false)

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (title && description) {
      dispatch(addTask({title, description , id: Date.now() , completed : false }));
      settitle("");
      setdescription("");
      setShowForm(false)
    }
  };

  const handleShowingForm = () =>{
    setShowForm(true)
  }

  const handleChangingTitle = (event) => {
    settitle(event.target.value);
  };

  const handleChangingDesc = (event) => {
    setdescription(event.target.value);
  };

  return (
    <div>
      <div className="container" >
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleShowingForm}
        >
          Add Task
        </button>
      {showForm && (
        <div>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Create To-do
              </h1>
            </div>
            <div className="modal-body">
              <div>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="title here..."
                  onChange={handleChangingTitle}
                  value={title}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label my-2"
                >
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="description here..."
                  onChange={handleChangingDesc}
                  value={description}
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
    
              <button
                onClick={handleAddTodo}
                type="submit"
                className="btn btn-primary"
                id="btnSave"
              >
                Save changes
              </button>
            </div>
          </div>
          </div>
  )}
        </div>
    </div>
  );
}
