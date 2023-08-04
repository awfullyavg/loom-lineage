import React from "react"
import { Link, useNavigate } from "react-router-dom"

function LoginForm({setUser}){

    const navigate = useNavigate();

    //Basic login functionality. Send them back to the homepage or dashboard
    function handleLogin(e) {
        e.preventDefault();

        let username = e.target.username.value;
        let password = e.target.password.value;

        fetch("/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify( { username, password } )
        }).then((resp) => {
            if (resp.ok) {
            resp.json().then((user) => {
                setUser(user)
                // navigate(`/user-dashboard/${user.id}`)
            }); // <-------- navigates to the dashboard
        }
        });
}


    //Navigation back to homepage or dashboard

    // function handleNavigation(user){
    //     navigate(`/user-dashboard/${user.id}`)
    // }

    return(
    <>
         <h1>Login Form</h1>
         <form onSubmit = {handleLogin}>
             <label>Username: </label>
             <input id = "username" type = "text" />
             <label>Password: </label>
             <input id = "password" type = "text" />
             <button type = "submit">Login</button>
         </form>
    </>
    )
}

export default LoginForm;