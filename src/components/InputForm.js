import "./InputForm.css";

function InputForm() {
  return (
    <form>
      <div>
        <label>Username</label>
        <input type="text"></input>
      </div>
      <div>
        <label>Age (Years)</label>
        <input type="text"></input>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
}

export default InputForm;
