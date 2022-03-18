import React, { useState } from "react";
import ModalPopUp from "../Modal/ModalPopUp";

import Card from "../UI/Card";
import Button from "../UI/Button"
import classes from "./InputForm.module.css";

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
    let n = enteredAge
    if ( n < 0 || n.trim() === '') {
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
      <Card className={classes.input}>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUsername} onChange={enteredUserChangeHandler}></input>
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" value={enteredAge} onChange={enteredAgeHandler}></input>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      {showModal && <ModalPopUp closeModal={setShowModal} numIsValid={numIsValid}/>}
      </Card>
  );
}

export default InputForm;
