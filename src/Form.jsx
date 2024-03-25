import React from "react";
import { useState } from "react";

function Form({ getFormData, values, setValues }) {
 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getFormData(values);
    setValues({ toDoName: "", toDoDescription: "" });
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-12 text-center">
          <h1>My ToDo</h1>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12 text-center">
          <form
            onSubmit={handleSubmit}
            className="d-flex justify-content-center gap-3"
          >
            <input
              type="text"
              name="toDoName"
              id="toDoName"
              placeholder="ToDo Name"
              value={values.toDoName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="toDoDescription"
              id="toDoDescription"
              placeholder="ToDo Description"
              value={values.toDoDescription}
              onChange={handleChange}
            />
            <input type="submit" value="Add ToDo" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
