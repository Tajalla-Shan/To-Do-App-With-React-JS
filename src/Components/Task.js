import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, removeTask, toggleChecked } from "../Redux/todoslice";

export default function Task(props) {
  const [isEditing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(props.title);
  const [newDescription, setNewDescription] = useState(props.description);
  const [isHovered, setIsHovered] = useState(false);

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

  const handleShowButtons = () => {
    setIsHovered(true);
  };

  const handleHideButtons = () => {
    setIsHovered(false);
  };

  const handleChangingNewTitle = (event) => {
    setNewTitle(event.target.value);
  };

  const handleChangingNewDesc = (event) => {
    setNewDescription(event.target.value);
  };

  const handleToggleChecked = () => {
    dispatch(toggleChecked({ id: props.id }));
    if (!props.checked) {
      setTimeout(() => {
        dispatch(removeTask({ id: props.id }));
      }, 200);
    }
  };

  return (
    <div>
      {/* Task card */}
      <div
        className="card my-4"
        onMouseEnter={handleShowButtons}
        onMouseLeave={handleHideButtons}
      >
        <div className="card-body d-flex align-items-center">
          <div className="col-auto form-check me-2">
            <input
              className="form-check-input"
              type="checkbox"
              checked={props.checked}
              onChange={handleToggleChecked}
            />
          </div>
          <div className="col d-flex flex-column">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
          </div>
          {isHovered && (
            <div className="d-flex flex-shrink-0">
              <a
                href="#"
                className="btn btn-primary mx-1"
                onClick={props.removeTask}
              >
                Remove
              </a>

              <button
                type="button"
                className="btn btn-primary mx-1"
                onClick={handleEdit}
              >
                Edit task
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Edit form (modal-body) */}
      {isEditing && (
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
      )}
    </div>
  );
}
