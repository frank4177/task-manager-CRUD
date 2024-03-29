import React from "react";
import { useState, useEffect } from "react";
import { login } from "./redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";



 const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
//   const isFetching = useSelector((state) => state.user.isFetching);


    


   // AUTO LOGIN
    // useEffect(() => {
    //     const handleClick = () => {
            
    //         login(dispatch, {email: process.env.REACT_APP_USER_NAME, password: process.env.REACT_APP_PASSWORD});

    //         setTimeout(() => {
    //             window.location.reload(true)
    //           }, 1000)
    //     }
    //     handleClick()
        
    //   }, [])


      


    // MANUAL CLICK LOGIN
     const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, {email, password});
        setTimeout(() => {
                       window.location.reload(true)
                      }, 3000)
    }

    return ( 
        <div className="login-container">
            <div className="login-wrapper" style={{paddingLeft:30, paddingBottom:15}}>
                <h1>SIGN IN</h1>
                <form action="" style={{display: "flex ", flexDirection: "column", gap:10, width: 200}}>
                    <input type="email" placeholder="username"   onChange={(e) => setEmail(e.target.value)} required/>
                    email: smithwills1989@gmail.com
                    <input placeholder="password" type="password"   onChange={(e) => setPassword(e.target.value)} required/>
                    password: 12345678
                    <button type="submit" onClick={handleClick} style={{width: 100}}>LOGIN</button>
                </form>
            </div>
        
        </div>
     );
}
 
export default Login;