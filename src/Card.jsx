import { useEffect, useState } from "react";

// This function returns card with todo information
function Card({ cardInfo, handleDelete, handleEdit, handleStatus }) {
  const [select, setSelect] =
    useState("Not Completed"); /* initializes select value */

  // it updates the select value(status of the todo)
  // whenever the status changes
  useEffect(() => {
    if (cardInfo.status) {
      setSelect(cardInfo.status);
    }
  }, [cardInfo.status]);

  // handles the changes of the select value
  const handleChange = (e) => {
    const selectedStatus = e.target.value;
    setSelect(selectedStatus);

    handleStatus({ ...cardInfo, status: selectedStatus });
  };

  return (
    <div
      className="card mb-4 bg-success bg-opacity-25 shadow"
      style={{ width: "22rem", height: "12rem" }}
    >
      <div className="card-body p-2">
        <h5 className="card-title">Name: {cardInfo.toDoName}</h5>

        <p className="card-text">Description: {cardInfo.toDoDescription}</p>
        <div className="status-check b-5">
          <label htmlFor="status">
            Status:
            <select
              className={`status m-2 p-1 border-0 rounded  ${
                select === "Completed"
                  ? "text-white bg-success bg-opacity-75"
                  : "bg-warning bg-opacity-75"
              }`}
              name="status"
              onChange={handleChange}
              value={select}
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
            className="btn btn-success me-md-2 border-0"
            type="button"
          >
            Edit
          </button>
          <button
            onClick={() => {
              handleDelete(cardInfo);
            }}
            className="btn btn-danger me-md-2 border-0 "
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
