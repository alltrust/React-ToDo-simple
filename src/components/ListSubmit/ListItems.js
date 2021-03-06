import Item from "./Item";

const ListItems = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <Item 
        key={item.id} 
        username={item.username} 
        age={item.age} />
      ))}
    </div>
  );
};

export default ListItems;
