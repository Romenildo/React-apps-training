import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import { useState } from "react";

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = event =>{
        event.preventDefault();//cancelar o reload do submit
        console.log(enteredAge, enteredUsername)
    }

    const userNameChangeHandler = event =>{
        setEnteredUsername(event.target.value)
    }
    const ageChangeHandler = event =>{
        setEnteredAge(event.target.value)
    }

    return (
        <Card className ={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username" >Username</label>
                <input id="username" type="text" onChange={userNameChangeHandler}/>
                <label htmlFor="age" >Age (Years)</label>
                <input id="age" type="text" onChange={ageChangeHandler}/>
                <Button type="submit"> Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser