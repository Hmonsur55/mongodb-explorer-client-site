import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {

    const users = useLoaderData()
    return (
      <div>
        <h3>Users length {users.length}</h3>
        {users.map((data) => (
          <p key={data._id}>
            <h4> {data.name}</h4>
            <h4>{data.email}</h4>
          </p>
        ))}
      </div>
    );
};

export default Users;