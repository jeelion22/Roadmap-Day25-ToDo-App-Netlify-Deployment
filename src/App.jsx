import { v4 as uuidv4 } from "uuid"; /* generates unique id for todo list*/

import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

import "./App.css";
import Form from "./Form";
import Navbar from "./Navbar";

function App() {
  const [toDoData, setToDoData] = useState([]);
  const [values, setValues] = useState({ toDoName: "", toDoDescription: "" });

  // creates and updates todo information
  const getFormData = (data) => {
    if (data.id) {
      toDoData.map((cardInfo) => {
        if (cardInfo.id === data.id) {
          cardInfo.toDoName = data.toDoName;
          cardInfo.toDoDescription = data.toDoDescription;
        }
      });
    } else {
      const updateData = {
        ...data,
        id: uuidv4(),
        status: "Not Completed",
      };
      setToDoData([...toDoData, updateData]);
    }
  };

  // handles edit of todo informtion
  const handleEdit = (editCardInfo) => setValues(editCardInfo);

  // handles the status of the todo
  const handleStatus = (statusUpdatedCard) => {
    setToDoData(
      toDoData.map((cardInfo) => {
        return cardInfo.id === statusUpdatedCard.id
          ? statusUpdatedCard
          : cardInfo;
      })
    );
  };

  // deletes the todo
  const handleDelete = (deleteCardInfo) => {
    const updatedToDoData = toDoData.filter(
      (cardInfo) => cardInfo.id !== deleteCardInfo.id
    );
    setToDoData(updatedToDoData);
  };

  return (
    <>
      <Form getFormData={getFormData} values={values} setValues={setValues} />
      <Navbar
        toDoData={toDoData}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleStatus={handleStatus}
        setToDoData={setToDoData}
      />
    </>
  );
}

export default App;
