import Card from '../UI/Card'
import './Item.css'


const Item = (props) =>{
    return (
        <Card className='item-container'>
            <h3>{props.username}</h3>
            <h3>{props.age}</h3>
        </Card>
    )
}

export default Item