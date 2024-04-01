import { useEffect, useState } from "react";
import Card from "./Card";

function Navbar({ toDoData, handleDelete, handleEdit, handleStatus }) {
  const [filterStatus, setFilterStatus] =
    useState("All"); /*trackes status of filter, the default value is 'All' */
  const [filteredData, setFilteredData] =
    useState(toDoData); /**keeps track of filtered data */

  // filers toDo data based on filterstatus and it is triggered when even the toDO data changes, that is
  // new to created or filter status changes
  useEffect(() => {
    if (filterStatus === "Not Completed") {
      const notCompleted = toDoData.filter(
        (cardInfo) => cardInfo.status === "Not Completed"
      );
      setFilteredData(notCompleted);
    } else if (filterStatus === "Completed") {
      const completed = toDoData.filter(
        (cardInfo) => cardInfo.status === "Completed"
      );
      setFilteredData(completed);
    } else {
      setFilteredData(toDoData);
    }
  }, [filterStatus, toDoData]);

  // handles select value
  const handleSelect = (event) => {
    const selectedState = event.target.value;
    setFilterStatus(selectedState);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex flex-wrap justify-content-around mt-5">
          <h4>My ToDos</h4>

          <label htmlFor="selectedStatus" className="d-flex align-items-center">
            Status:
            <select
              className={`ms-2 border-0 p-1 rounded ${
                filterStatus === "Completed"
                  ? "text-white bg-success bg-opacity-75"
                  : "bg-warning bg-opacity-75"
              }`}
              name="selectedStatus"
              id="selectedStatus"
              value={filterStatus}
              onChange={handleSelect}
            >
              <option value="All">All</option>
              <option value="Not Completed">Not Completed</option>
              <option value="Completed">Completed</option>
            </select>
          </label>
        </div>
      </div>

      <div className="row mt-5  ">
        {filteredData.map((cardInfo) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={cardInfo.id}>
            <Card
              cardInfo={cardInfo}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleStatus={handleStatus}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
