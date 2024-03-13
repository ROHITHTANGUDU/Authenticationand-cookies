
import { useNavigate } from "react-router-dom";
import "./index.css";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";


const Header = ()=>
{
    const navigate = useNavigate();
    const clicklogout = ()=>
    {
        Cookies.remove("jwt-token");
        navigate("/login");
        
    }
    return(
        <div className = "header">
            <div className = "header-sm">
                <div className = "sm-logo-logout">
                    <img src = "https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt = "website-logo" className = "website-logo"/>
                    <img src ="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png " alt = "logout-logo" className="logout-logo" onClick={clicklogout}/>
                </div> 
                <div className = "home-products-cart-sm">
                    <img src ="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png" alt = "home-logo" className="home-products-cart-logo"/>
                    <img src ="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png" alt = "logout-logo" className="home-products-cart-logo"/>
                    <img src ="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png" alt = "logout-logo" className="home-products-cart-logo"/>     
                </div>
            </div>
            <nav className= "header-m">
                <img src = "https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt = "website-logo" className = "website-logo"/>
                <nav className="home-products-cart-m">
                    <a href= "#" className = "home-products-cart-text-m">Home</a>
                  
                    <Link to ="/products" className="home-products-cart-text-m">
                         <a href= "#"  className="home-products-cart-text-m">products</a>
                    </Link>
                    <Link to ="/cart" className="home-products-cart-text-m">
                         <a href= "#"  className="home-products-cart-text-m">Cart</a>
                    </Link>

                    
                    <button className = "logout-button" onClick={clicklogout}>
                        logout
                    </button>
                </nav>
             </nav>
        </div>

    )
} 

export default Header