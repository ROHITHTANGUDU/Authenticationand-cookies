import Cookies from "js-cookie"
import {Route,Navigate} from "react-router-dom"


const ProtectedRoute = ()=>{
    const token = Cookies.get("jwt-token");
    if(token === undefined)
    {
        return <Navigate to ="/login" />

    }
    return <Route excat path = "/"></Route>

}





export default ProtectedRoute




