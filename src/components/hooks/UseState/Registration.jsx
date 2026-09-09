import "./index.css";
import { useState } from "react";

export  const Registration = () => {
    const [user, setuser] =useState({
        firstName: "",
        lastname: " ",
        email: " ",
        password: " ",
        phoneNumber: " ",
    });

    const handelInputchange =(e) =>{
        const {name, value} = e.target;
        setuser((prev) => ({...prev, [name]: value}));
    };

    const handelFormSubmit =(event) =>{
         event.preventDefault();
    }

    return (
        <>
        <form onSubmit={handelFormSubmit}>
            <div className="container">
                <h1>Sign Up</h1>
                  <p>Please fill in this form to create an account.</p>

                  <label html="firstname">
                    <b>First Name</b>
                  </label>
                  <input type="text"
                  name="firstName"
                  placeholder="Enter firstName"
                  required
                  value={user.firstName}
                  onChange={handelInputchange}
                  />
            </div>
        </form>
        </>
    );

} 
