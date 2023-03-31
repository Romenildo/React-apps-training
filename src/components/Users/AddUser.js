import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css"
import { useState } from "react";

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler = event =>{
        event.preventDefault();//cancelar o reload do submit
        
        //validacoes
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title:"Invalid input",
                message: "Please enter a valid name and age (non-empty values)."
            })
            return
        }
        //o + é como definimos no useState como '', talvez der erro, e o + tranforma o valor em um numero
        if(+enteredAge < 1){
            setError({
                title:"Invalid age",
                message: "Please enter a valid age ( > 0)."
            })
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

    const errorHandler = () =>{
        setError(null)
    }

    return (
        <div>
            {
            //quando o evento onConfirm ocorrer dentro do errorModal ele chamara a funcao do pai errorHandler
            error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}> </ErrorModal>}
            
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
        </div>
    );
}

export default AddUser