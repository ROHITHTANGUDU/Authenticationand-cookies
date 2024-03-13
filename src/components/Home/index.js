import { useEffect } from "react";
import "./index.css";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import Header from "../Header"


const Home = ()=>
{
    const token = Cookies.get("jwt-token");
    if(token === undefined)
    {
        return <Navigate to = "/login"/>
    }

    return(
        <div>
            {<Header/>}
            <div className = "home-section">
                <h1 className="heading">
                Clothes That Get YOU Noticed
                </h1>
                <img src = "https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" alt = "picture" className="home-image"/> 
                <div className = "para-shop-now-button">
                    <h1 className="heading-m">
                        Clothes That Get YOU Noticed

                    </h1>
                    <p className="para">
                    line 34:21:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
                    </p>
                    <button className="shop-now-button">
                        Shop Now
                    </button>

                </div>
            </div>
            
        </div>
    )

}

export default Home