import React, { useState } from "react";
import ModalPopUp from "../Modal/ModalPopUp";

import "./InputForm.css";

function InputForm(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [showModal, setShowModal] = useState(false);

  const enteredUserChangeHandler = (event) => {
    setEnteredUsername(event.target.value);

  };
  const enteredAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };


  const formSubmitHandler = (event) => {
    event.preventDefault();
    // modalShowHandler()
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setShowModal(true);
      return
    }
    let n = enteredAge.trim();
    if (n > 100 || n < 0 || isNaN(n) || n === "") {
      setShowModal(true);
      return
    }
    const itemData = {
      username: enteredUsername,
      age:enteredAge,
    };
    props.onSaveItemData(itemData)

    setEnteredAge('');
    setEnteredUsername('');

    

  };
  return (
    <div>
      <div>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label>Username</label>
            <input type="text" onChange={enteredUserChangeHandler}></input>
          </div>
          <div>
            <label>Age (Years)</label>
            <input type="number" onChange={enteredAgeHandler}></input>
          </div>
          <button type="submit">Add User</button>
        </form>
      </div>
      {showModal && <ModalPopUp closeModal={setShowModal} />}
    </div>
  );
}

export default InputForm;
