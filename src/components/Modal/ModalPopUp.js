import Card from "../UI/Card";
import Button from "../UI/Button"


import "./ModalPopUp.css";

function ModalPopUp(props) {
  const closeModal = () => {
    props.closeModal(false);
  };
  
  

  

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <Card className="modal" onClick={props =>props.stopPropagation()} >
        <div className="modal-header" >
          <h2>Input Invalid</h2>
        </div>
          <p className="modal-msg"> 
          {!props.numIsValid
            ? "select proper number"
            : "do not leave username field empty"}
          </p>
        <Button onClick={closeModal}>Okay</Button>
      </Card>
    </div>
  );
}

export default ModalPopUp;
