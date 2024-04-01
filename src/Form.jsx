function Form({ getFormData, values, setValues }) {
  // handles changes of the input field
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  // handles submit
  const handleSubmit = (event) => {
    event.preventDefault();
    getFormData(values);
    setValues({ toDoName: "", toDoDescription: "" });
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-12 text-center">
          <h1 className="text-success shadow-lg pb-2 mt-2 pt-2 bg-success bg-opacity-25">
            My ToDo
          </h1>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12 text-center">
          <form
            onSubmit={handleSubmit}
            className="d-flex flex-wrap justify-content-center gap-3"
          >
            <input
              className="border border-success rounded"
              type="text"
              name="toDoName"
              id="toDoName"
              placeholder="ToDo Name"
              value={values.toDoName}
              onChange={handleChange}
            />
            <input
              class="border border-success rounded"
              type="text"
              name="toDoDescription"
              id="toDoDescription"
              placeholder="ToDo Description"
              value={values.toDoDescription}
              onChange={handleChange}
            />
            <input
              className="bg-success text-white border-0 rounded "
              type="submit"
              value="Add ToDo"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
