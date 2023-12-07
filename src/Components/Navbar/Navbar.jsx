import React, {useState} from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
const Navbar = () => {

    const [menu,setMenu] = useState("shop")
     
    return(
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt=""/> 
                <p>PCPlanet</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("processors")}}><Link style={{textDecoration: 'none'}} to='/processors'>Processor</Link>{menu==="processors"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("laptop")}}><Link style={{textDecoration: 'none'}} to='/laptop'>Laptop</Link>{menu==="laptop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("other product")}}><Link style={{textDecoration: 'none'}} to='/other product'>Other Product</Link> {menu==="other product"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar