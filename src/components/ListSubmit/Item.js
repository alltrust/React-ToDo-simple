import Card from '../UI/Card'
import classes from './Item.module.css'


const Item = (props) =>{
    return (
        <Card className={classes.item}>
            <h3>{props.username}</h3>
            <h3>{props.age}</h3>
        </Card>
    )
}

export default Item