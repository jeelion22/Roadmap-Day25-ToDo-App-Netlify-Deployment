import React from "react";
import Card from "./Card";

function Navbar({ toDoData, handleDelete, handleEdit }) {
  console.log(toDoData);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-around mt-5">
          <h4>My ToDos</h4>

          <label htmlFor="selectedStatus" className="d-flex align-items-center">
            Status:
            <select className="ms-2" name="selectedStatus" id="selectedStatus">
              <option value="All">All</option>
              <option value="Not Completed">Not Completed</option>
              <option value="Completed">Completed</option>
            </select>
          </label>
        </div>
      </div>

      <div className="row mt-5">
        {toDoData.length > 0 &&
          toDoData.map((cardInfo, index) => {
            return (
              <div className="col-4">
                <Card
                  key={index}
                  cardInfo={cardInfo}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Navbar;
