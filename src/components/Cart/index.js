import Cookies from "js-cookie"
import { Navigate } from "react-router-dom";

const Cart = ()=>
{
    const token = Cookies.get("jwt-token");
    if(token === undefined)
    {
        return <Navigate to = "/login"/>

    }
    return(
        <div>
            <h1>
                Cart
            </h1>
        </div>
    )
}


export default Cart