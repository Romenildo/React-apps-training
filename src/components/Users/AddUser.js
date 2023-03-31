import Card from "../UI/Card";
import classes from "./AddUser.module.css"

const AddUser = props => {

    const addUserHandler = event =>{
        event.preventDefault();//cancelar o reload do submit
    }

    return (
        <Card className ={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="text" />
                <button type="submit"> Add User</button>
            </form>
        </Card>
    );
}

export default AddUser