import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/todoslice";

export default function TaskForm() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [saveAttempted, setSaveAttempted] = useState(false);

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    setSaveAttempted(true);
    if (title || description) {
      dispatch(
        addTask({
          title: title || "Untitled",
          description: description || "No description",
          id: Date.now(),
          checked: false,
        })
      );
      settitle("");
      setdescription("");
      setShowForm(false);
      setSaveAttempted(false);
    }
  };

  const handleNewTask = () => {
    setShowForm(true);
  };

  const handleChangingTitle = (event) => {
    settitle(event.target.value);
  };

  const handleChangingDesc = (event) => {
    setdescription(event.target.value);
  };

  const handleCancel = () => {
    settitle("");
    setdescription("");
    setShowForm(false);
    setSaveAttempted(false);
  };

  return (
    <div>
      <div className="container">
        {!showForm && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleNewTask}
          >
            Add Task
          </button>
        )}
        {showForm && (
          <div>
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5 mr-1" id="exampleModalLabel">
                  Create Task
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCancel}
                  aria-label="Close"
                ></button>
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
                    style={{
                      borderColor: saveAttempted && !title ? "red" : "",
                      color: saveAttempted && !title ? "red" : "",
                    }}
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
                    style={{
                      resize: "none",
                      borderColor: saveAttempted && !description ? "red" : "",
                      color: saveAttempted && !description ? "red" : "",
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={handleCancel}
                  type="button"
                  className="btn btn-secondary me-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTodo}
                  type="submit"
                  className="btn btn-primary"
                  id="btnSave"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
