import './Item.css'

const Item = (props) =>{
    return (
        <div className='item-container'>
            <h3>{props.username}</h3>
            <h3>{props.age}</h3>
        </div>
    )
}

export default Item