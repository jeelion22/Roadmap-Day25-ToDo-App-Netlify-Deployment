import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

import "./App.css";
import Form from "./Form";
import Navbar from "./Navbar";

function App() {
  const [toDoData, setToDoData] = useState([]);

  const getFormData = (data) => {
    const updateData = {
      ...data,
      id: toDoData.length + 1,
      status: "Not Completed",
    };
    setToDoData([...toDoData, updateData]);
  };

  const handleEdit = (editCardInfo) => setValues(editCardInfo);

  const handleDelete = (deleteCardInfo) => {
    const updatedToDoData = toDoData.filter(
      (cardInfo) => cardInfo.id !== deleteCardInfo.id
    );
    setToDoData(updatedToDoData);
  };

  return (
    <>
      <Form getFormData={getFormData} />
      <Navbar
        toDoData={toDoData}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default App;
