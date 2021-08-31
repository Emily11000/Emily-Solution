import React, {useEffect, useState} from 'react';
import './UserAgeTable.css';

const UserAgeTable = () =>{

    const[userList, setUserList]= useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/users')
            .then(res=> res.json())
            .then(user => setUserList(user))
            .catch(err=>console.log(err))


    },[])
    return (
        <div className="container">
            <div className="list">
                <h3>All Users</h3>
                <div>Users and their age</div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Age</th>
                    </tr>
                    </thead>
                    <tbody>
                        {userList.map((row,index)=>(
                            <tr key={index}>
                            <td>{row.username}</td>
                            <td>{row.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserAgeTable;
