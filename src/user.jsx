import { useEffect, useState } from "react";

export default function User() {
    const [users, setUsers] =useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
  return (
    <div>
        <h3>Users: {users.length}</h3>
    </div>
  );
}


/**
 * 1.declear a state to hold the data
 * 2.useEffect with call and depency array
 * 2.use fetch and load data
 */