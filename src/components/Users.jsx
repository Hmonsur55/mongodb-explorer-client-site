import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {

  const users = useLoaderData()
  
  // for delete property
  const handleDelete = id => {
    console.log(id)
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }


    return (
      <div>
        <h3>Users length {users.length}</h3>
        {users.map((data) => (
          <p key={data._id}>
            {data.name} : {data.email} : {data._id}{" "}
            <button onClick={() => handleDelete(data._id)}>X</button>
          </p>
        ))}
      </div>
    );
};

export default Users;