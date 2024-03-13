import { useNavigate } from "react-router-dom";
import  "./index.css";
import { useState} from "react"
import Cookies from "js-cookie"
import {Navigate} from "react-router-dom"





const Login = ()=>
{
    const [state,setstate] = useState({
        username : "",
        password : "" 
    })

    const navigate = useNavigate()
    const jwtToken = Cookies.get("jwt-token");
        if(jwtToken !== undefined)
        {
            return <Navigate to ="/" /> // when there is no action this we can use big "N" Navigate 
        }  

  
   
    
    const changeusername = (event)=>
    {
        setstate((prevstate)=>
        {
            return{...prevstate,username : event.target.value}

        })
    }
    const changepassword = (event)=>
    {
        setstate((prevstate)=>
        {
            return{...prevstate,password : event.target.value}

        })
    }
    const loginfun = async ()=>{
        let userdetails ={
            username : state.username,
            password : state.password
        }
        let obj = {
            method : "POST",
            body : JSON.stringify(userdetails)
        }

        let response = await fetch("https://apis.ccbp.in/login" , obj)
        let data = await response.json();
        console.log(response)
        console.log(data);
        if(response.ok)
        {
            Cookies.set("jwt-token" , data.jwt_token , {expires : 30})
            navigate("/") // when there is a button clik the useNavigate() hook
        }

    }

    return(
        <div className = "login-background">
            {console.log(state.password)}
            <img src = "https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png " alt ="website-logo" className="logo"/>
            <img src = "https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt = "website-login" className = "login-image"/> 
            <div className = "login-details">
                <img src = "https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png " alt ="website-logo" className="logo-md"/>
                <label htmlFor="username" className = "username-label">
                    USERNAME
                </label>
                <br/>
                <input type="text" placeholder="Username" id="username"  className = "username-input" onChange={changeusername}/>
                <br/>
                <label htmlFor="password" className="password-label">
                    PASSWORD
                </label>
                <br/>
                <input type="password" placeholder="Password" id="password" className = "password-input" onChange={changepassword}/>
                <button className="button" onClick={loginfun}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Login