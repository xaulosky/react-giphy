import React, { useState } from "react";


const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, seterror] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 0) {
      seterror(false);
      setCategories((categorias) => [inputValue, ...categorias]);
    } else {
      seterror(true);
    }
    setInputValue("");
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <form action="" onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                onChange={handleInputChange}
                value={inputValue}
              />
            </div>
            <button className="btn btn-block btn-primary">Agregar</button>
          </form>
          <br />

          {error ? (
            <div className="alert alert-danger" role="alert">
              Agrega un valor
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default AddCategory;

