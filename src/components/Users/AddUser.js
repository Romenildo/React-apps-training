import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import { useState } from "react";

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = event =>{
        event.preventDefault();//cancelar o reload do submit
        
        //validacoes
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return
        }
        //o + é como definimos no useState como '', talvez der erro, e o + tranforma o valor em um numero
        if(+enteredAge < 1){
            return
        }
        props.onAddUser(enteredUsername, enteredAge);
        //redefinindo os valores do input
        setEnteredUsername('')
        setEnteredAge('')
    }

    //alterar os valores do input dinamicamente ao digitar
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
                <input 
                    id="username" 
                    type="text" 
                    value={enteredUsername}//esse valor é necessario na hora de resetar os valores
                                            //caso contrario seria necessario algum evento da funcao do set
                    onChange={userNameChangeHandler}/>
                <label htmlFor="age" >Age (Years)</label>
                <input 
                    id="age" 
                    type="text" 
                    value={enteredAge}
                    onChange={ageChangeHandler}/>
                <Button type="submit"> Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser