import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

import "./App.css";
import Form from "./Form";
import Navbar from "./Navbar";

function App() {
  const [toDoData, setToDoData] = useState([]);
  const [values, setValues] = useState({ toDoName: "", toDoDescription: "" });


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
        id: toDoData.length + 1,
        status: "Not Completed",
      };
      setToDoData([...toDoData, updateData]);
    }
  };

  const handleEdit = (editCardInfo) => setValues(editCardInfo);
  
  const handleStatus = (statusUpdatedCard)=> {
    // alert(JSON.stringify(statusUpdatedCard, null, 2))

    setToDoData(toDoData.map((cardInfo) => {
      return cardInfo.id === statusUpdatedCard.id ? statusUpdatedCard : cardInfo
      
    }))
  }

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
   

      />

   <input type="button" value="Cick ToDoData" onClick={()=> {alert(JSON.stringify(toDoData, null, 2))}} />
    
    </>
  );
}

export default App;
