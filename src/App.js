
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import Products from './components/Products';

import {BrowserRouter , Route,Routes} from "react-router-dom"

const  App = ()=>
{
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path = "/login" element ={<Login/>}>
        </Route>
        <Route exact path = "/" element ={<Home/>}>
        </Route>
        <Route exact path = "/products" element ={<Products/>}>
        </Route>
        <Route exact path = "/cart" element ={<Cart/>}>
        </Route>
        <Route exact path = "/*" element ={<NotFound/>}>
        </Route>
      </Routes>

    </BrowserRouter>
    
  )
}



export default App;
