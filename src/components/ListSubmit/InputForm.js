import React, { useState } from "react";
import ModalPopUp from "../Modal/ModalPopUp";

import "./InputForm.css";

function InputForm(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [numIsValid, setNumIsValid] = useState(true)

  const enteredUserChangeHandler = (event) => {
    setEnteredUsername(event.target.value);

  };
  const enteredAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };


  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0) {
      setShowModal(true);
      return
    }
    let n = enteredAge.trim();
    if (n > 100 || n < 0 || isNaN(n) || n.trim() === '') {
      setShowModal(true);
      setNumIsValid(false)
      return
    }

    const itemData = {
      username: enteredUsername,
      age:enteredAge,
    };
    props.onSaveItemData(itemData)

    setEnteredAge('');
    setEnteredUsername('');
    setNumIsValid(true)

    

  };
  return (
    <div>
      <div>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label>Username</label>
            <input type="text" value={enteredUsername} onChange={enteredUserChangeHandler}></input>
          </div>
          <div>
            <label>Age (Years)</label>
            <input type="number" value={enteredAge} onChange={enteredAgeHandler}></input>
          </div>
          <button type="submit">Add User</button>
        </form>
      </div>
      {showModal && <ModalPopUp closeModal={setShowModal} numIsValid={numIsValid}/>}
    </div>
  );
}

export default InputForm;
