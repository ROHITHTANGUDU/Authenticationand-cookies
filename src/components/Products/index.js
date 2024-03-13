import Cookies from "js-cookie"
import { Navigate } from "react-router-dom";


const Products = ()=>
{
    const token = Cookies.get("jwt-token");
    if(token === undefined)
    {
        return <Navigate to = "/login"/>

    }

    return(
        <div>
            <h1>
                Products
            </h1>
        </div>
    )
}



export default Products