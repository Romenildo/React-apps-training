import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([])

  //funcao que vai ser acionada ao chamar onAddUser no filho AddUser
  const addUserHandler = (uName, uAge) =>{
    console.log(uName, uAge)
    setUsersList( (prevUserList) =>{
      console.log(prevUserList)
      return [...prevUserList, {name:uName, age: uAge}]
    })
  }

  return (
    <div>
      
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList} />
    </div>
  );
}

export default App;
