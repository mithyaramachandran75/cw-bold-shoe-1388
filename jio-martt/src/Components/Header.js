import React from 'react'

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
                    <a href="/" className='nav-link'><h2>Stationary</h2></a> 
                </div>
                <div className='nav-item2'>
                    <a href="/" className='nav-link'><h2>Mens</h2></a>
                   
                </div> 
                <div className='nav-item3'>
                    <a href="/" className='nav-link'><h2>Mobiles&Tablets</h2></a>
                   
                </div> 
                <div className='nav-item4'>
                    <a href="/" className='nav-link'><h2>Make Up</h2></a>
                   
                </div>           
                <div className='nav-item'>
                    <a href='/' className='nav-link'><i class='bx bxs-user'>Signin</i></a>
                   
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