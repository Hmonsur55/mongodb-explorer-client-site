import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {

  const LoadUsers = useLoaderData()
  const [users, setUsers] =useState(LoadUsers)
  // for delete property
  const handleDelete = id => {
    console.log(id)
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount>0) {
          alert("data Deleted successfully")
          const remaining = users.filter(user => user._id !== id)
          setUsers(remaining)
        }
      });
  }


    return (
      <div>
        <h3>Users length {users.length}</h3>
        {users.map((data) => (
          <p key={data._id}>
            {data.name} : {data.email} : {data._id}

            <Link to={`/update/${data._id}`}><button>Update</button></Link>

            <button onClick={() => handleDelete(data._id)}>X</button>
          </p>
        ))}
      </div>
    );
};

export default Users;