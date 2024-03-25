import { useState } from "react";

function Card({ cardInfo, handleDelete, handleEdit }) {
  const handleChange = () => {};

  return (
    <div className="card mb-4" style={{ width: "22rem", height: "11rem" }}>
      <div className="card-body p-2">
        <h5 className="card-title">Name: {cardInfo.toDoName}</h5>

        <p className="card-text">Description: {cardInfo.toDoDescription}</p>
        <div className="status-check b-5">
          <label htmlFor="status">
            Status:
            <select
              className="status m-2"
              name="status"
              onChange={handleChange}
            >
              <option value="Not Completed">Not Completed</option>
              <option value="Completed">Completed</option>
            </select>
          </label>
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-2">
          <button
            onClick={() => {
              handleEdit(cardInfo);
            }}
            className="btn btn-primary me-md-2 border-0"
            type="button"
          >
            Edit
          </button>
          <button
            onClick={() => {
              handleDelete(cardInfo);
            }}
            className="btn btn-primary me-md-2 border-0"
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
