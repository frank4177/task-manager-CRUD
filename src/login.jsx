import React from "react";
import { useState, useEffect } from "react";
import { login } from "./redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";



    const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const {isFetching} = useSelector((state)=> state.user)
    const [value, setValue] = useState()
    const [Time, setTime] = useState("")



    // const handleClick = (e) => {
    //     e.preventDefault()
    //     login(dispatch, {email, password});
    // }

    useEffect(() => {
        const handleClick = () => {
            
            login(dispatch, {email: "smithwills1989@gmail.com", password: "12345678"});
        }
        handleClick()
      }, [])

    return ( 
        <div className="login-container">
            {/* <div className="login-wrapper">
                <h1>SIGN IN</h1>
                <form action="">
                    <input type="email" placeholder="username" value="smithwills1989@gmail.com" onChange={(e) => setEmail(e.target.value)} required/>
                    <input placeholder="password" type="password" value="12345678" onChange={(e) => setPassword(e.target.value)} required/>
                    <button type="submit" onClick={handleClick}  disabled={isFetching}>LOGIN</button>
                    <a >FORGOT PASSWORD?</a>
                </form>
            </div>
            <input type="date" onChange={(event) => setValue(event.target.value)}/>
            <input type="time" step='1' name="" id="" onChange={(event) => setTime(event.target.value)}/>
            <div>{value}</div>
            <div>{Time}</div>
            <div></div> */}
        </div>
     );
}
 
export default Login;