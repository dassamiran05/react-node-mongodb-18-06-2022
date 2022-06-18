import React from 'react';

const AddUser = () => {
    const handleAddUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = {name, email};
        // console.log(user);

        //Send data to the server
        fetch('http://localhost:5000/user',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log('Success', data);
            alert('USer added successfully!!!');
            event.target.reset();
        })
    }
    return (
        <div>
            <h2>Please add a new user</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder="Your name" id="" required/><br/>
                <input type="email" name="email" placeholder="Your email" id="" required/><br/>
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;