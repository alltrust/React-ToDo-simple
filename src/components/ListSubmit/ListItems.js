import "./ListItems.css";

const ListItems = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <div key={item.id} username={item.username} age={item.age}></div>
      ))}
    </div>
  );
};

export default ListItems;
