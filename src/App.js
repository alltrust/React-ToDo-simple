import { useState } from 'react';
import './App.css';

import ListItems from './components/ListSubmit/ListItems';
import NewItem from './components/ListSubmit/NewItem';

const DUMMY_ITEMS = [
  {
    id:"e1",
    username:"alexis",
    age: 20 
  },
  {
    id:"e2",
    username:"andrea",
    age: 24
  },
  {
    id: "e3",
    username:"aldo",
    age: "30"
  }
];

function App() {
  const[items, setItems] = useState(DUMMY_ITEMS);

  const handleItemData = (item) =>{
    console.log(item)
    setItems((previousitems) =>{
      return (
        [item, ...previousitems])
        
        
    })
  };

  return (
    <div className="App">
      <NewItem onAddItem={handleItemData}/>
      <ListItems items={items}/>
    </div>
  );
}

export default App;
