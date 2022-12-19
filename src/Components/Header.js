import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
          <div className='navigation'>
        <div className='menu'>
            <i className='bx bx-menu'></i>
            </div>
            <div className='nav-center container d-flex'>

            <a href='' className='logo'><img src="https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/c30435c25ca949ad002c3e94b4bce7ff/jiomart-coupons-logo-large.png?702037" alt="img" /></a>
              
            <ul className='nav-list d-flex'>
                  <div className='input-box'>
                        <input className="input-field" type="text"></input>
                        </div>
                        <div className='nav-item1'>
                        <Link to="/home" className='nav-link'><h2>Home</h2></Link>
                    {/* <a href="/" ></a>  */}
                </div>
                <div className='nav-item2'>
                <Link to="/mens" className='nav-link'><h2>Electronics</h2></Link>
                    {/* <a href="/" className='nav-link'><h2></h2></a> */}
                   
                </div> 
                <div className='nav-item3'>
                <Link to="/mobiles" className='nav-link'><h2>Products</h2></Link>
                    {/* <a href="/" className='nav-link'><h2></h2></a> */}
                   
                </div> 
                <div className='nav-item4'>
                <Link to="/makeup" className='nav-link'><h2>Groceries</h2></Link>
                    {/* <a href="/" className='nav-link'></a> */}
                   
                </div>           
                <div className='nav-item'>
                <Link to="/login" className='nav-link'><h2><i class='bx bxs-user'>Login</i></h2></Link>
                    {/* <a href='/' className='nav-link'></a> */}
                   
                </div>
                <li className='icons d-flex'>
                    <a href='/' className='icon'>
                    <i class='bx bxs-cart'></i>
                    </a>
                </li>
            </ul>
          
            </div>
        </div>
    </div>
  )
}

export default Header