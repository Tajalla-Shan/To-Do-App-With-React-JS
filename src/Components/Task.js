import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../Redux/todoslice";

export default function Task(props) {
  const [isEditing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(props.title);
  const [newDescription, setNewDescription] = useState(props.description);
  const dispatch = useDispatch();
  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    dispatch(
      editTask({ id: props.id, title: newTitle, description: newDescription })
    );
    setEditing(false);
  };

  const handleChangingNewTitle = (event) => {
    setNewTitle(event.target.value);
  };

  const handleChangingNewDesc = (event) => {
    setNewDescription(event.target.value);
  };

  return (
    <div>
      <div className="card my-4">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary" onClick={props.removeTask}>
            Remove
          </a>

          <button
            type="button"
            className="btn btn-primary"
            onClick={handleEdit}
          >
            Edit task
          </button>
        </div>
      </div>
      {isEditing && (
        <div>
          <div className="modal-body">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="title here..."
              onChange={handleChangingNewTitle}
              value={newTitle}
            />
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
                onChange={handleChangingNewDesc}
                value={newDescription}
              ></textarea>
            </div>
            <button
              onClick={handleSave}
              type="submit"
              className="btn btn-primary mb-3"
              id="btnSave"
            >
              Save changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
