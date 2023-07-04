import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setusersList] = useState([])

  const adduserHandler = (uName, uAge)=>{
    setusersList((prevUsersList)=> {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}]
    })

  }
  return (
    <div>
  <AddUser onAddUser={adduserHandler}/>
  <UsersList users={usersList}/>
    </div>
  );
}

export default App;
