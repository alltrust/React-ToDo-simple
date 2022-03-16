import InputForm from "./InputForm"

const NewItem = (props) =>{
    const saveItemDataHandler = (enteredItemData)=>{
        const itemData = {
            ...enteredItemData,
            id:Math.random().toString()
        }
        props.onAddItem(itemData)
    }
    
    return (
        <div>
            <InputForm onSaveItemData={saveItemDataHandler}/>
        </div>
    )
}

export default NewItem