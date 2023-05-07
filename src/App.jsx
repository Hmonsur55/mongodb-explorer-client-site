import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleAddUser = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const user = { name, email }
    // console.log(user)

    // data insert
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type":"application/json",
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert('user added succesfully')
          form.reset()
        }
      });
}



  return (
    <>
      <h1 className="text-center">CRUD</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='your name' />
        <br></br>
        <input type="email" name="email" placeholder='your email' />
        <br></br>
        <input type="submit" value="add user" />
    

      </form>
    </>
  );
}

export default App
