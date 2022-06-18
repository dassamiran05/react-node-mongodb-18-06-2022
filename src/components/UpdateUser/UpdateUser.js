import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    
    const {id} = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/user/${id}`)
        .then(res =>res.json())
        .then(data =>setUser(data))
    }, []);


    const handleUpdateUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const updateUser = {name, email};
        // console.log(user);

        //Send data to the server
        fetch(`http://localhost:5000/user/${id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(updateUser)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log('Success', data);
            alert('USer Updated successfully!!!');
            event.target.reset();
        })
    }
    return (
        <div>
            <h2>Update User:{user.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" value={user.name} placeholder="Your name" id="" required/><br/>
                <input type="email" value={user.email} name="email" placeholder="Your email" id="" required/><br/>
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;