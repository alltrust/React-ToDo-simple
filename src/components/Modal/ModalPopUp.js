import React, {useState} from "react";

import "./ModalPopUp.css";

function ModalPopUp(props) {
  const closeModal = ()=>{
    props.closeModal(false)
  }
  
  return (
    <div className="modal">
      <div className="modal-header">
        <h2>Input Invalid</h2>
      </div>
      <p className="modal-msg">{!props.numIsValid ? 'select proper number' : "do not leave username field empty" }</p>
      <button onClick={closeModal}>Okay</button>
    </div>
  );
};

export default ModalPopUp;
