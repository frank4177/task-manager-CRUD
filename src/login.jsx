import React from "react";
import { useState, useEffect } from "react";
import { login } from "./redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";



 const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
//   const isFetching = useSelector((state) => state.user.isFetching);



// LOAD WINDOW

    


   // AUTO LOGIN
    useEffect(() => {
        const handleClick = () => {
            
            login(dispatch, {email: process.env.REACT_APP_USER_NAME, password: process.env.REACT_APP_PASSWORD});

            setTimeout(() => {
                window.location.reload(true)
              }, 200000)
        }
        handleClick()
        
      }, [])


      


    // // MANUAL CLICK LOGIN
    //  const handleClick = (e) => {
    //     e.preventDefault()
    //     login(dispatch, {email, password});
    // }

    return ( 
        <div className="login-container">
            {/* <div className="login-wrapper" style={{padding:30}}>
                <h1>SIGN IN</h1>
                <form action="" style={{display: "flex ", flexDirection: "column", gap:10, width: 200}}>
                    <input type="email" placeholder="username" defaultValue='smithwills1989@gmail.com'  onChange={(e) => setEmail(e.target.value)} required/>
                    email:
                    <input placeholder="password" type="password" defaultValue='12345678'  onChange={(e) => setPassword(e.target.value)} required/>
                    <button type="submit" onClick={handleClick} style={{width: 100}}>LOGIN</button>
                </form>
            </div> */}
        
        </div>
     );
}
 
export default Login;