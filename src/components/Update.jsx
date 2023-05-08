import { useLoaderData } from "react-router-dom";
//  data updated
const Update = () => {
    const loadedData = useLoaderData();

    const updateData = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const email =form.email.value
        console.log(name, email)
        const updatedUser = {name, email}

        fetch(`http://localhost:5000/users/${loadedData._id}`, {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body:JSON.stringify(updatedUser)
            
        })
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              
              if (data.modifiedCount > 0) {
                  alert('data has been updated successfully')
                  form.reset();
            }
          });
    }

    return (
        <div>
            <h1>updated user of {loadedData.name}</h1>
            <form onSubmit={updateData}>
                <input type="text" name='name' defaultValue={loadedData?.name} />
                <br></br>
                <input type="email" name='email' defaultValue={loadedData?.email} />
                <br></br>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Update;
