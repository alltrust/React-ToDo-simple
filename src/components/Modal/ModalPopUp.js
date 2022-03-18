import Card from "../UI/Card";
import "./ModalPopUp.css";

function ModalPopUp(props) {
  const closeModal = () => {
    props.closeModal(false);
  };
  
  

  

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={props =>props.stopPropagation()} >
        <div className="modal-header" >
          <h2>Input Invalid</h2>
        </div>
          <p className="modal-msg"> 
          {!props.numIsValid
            ? "select proper number"
            : "do not leave username field empty"}
          </p>
        <button onClick={closeModal}>Okay</button>
      </div>
    </div>
  );
}

export default ModalPopUp;
