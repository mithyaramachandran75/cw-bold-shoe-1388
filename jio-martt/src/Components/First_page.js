import React from 'react'
import './first_page.css'

import slider1 from '../img/slider1.jpg'
import slider2 from '../img/slider2.jpg'
import slider3 from '../img/slider3.jpg'
const first_page = () => {
  return (
    <div className='header' id='header'>
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
                <div className='nav-item'>
                    <a href='/' className='nav-link'><i class='bx bxs-user'>Signin/Signup</i></a>
                   
                </div>
                <li className='icons d-flex'>
                    <a href='/' className='icon'>
                    <i class='bx bxs-cart'></i>
                    </a>
                </li>
            </ul>
          
            </div>
        </div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img id="slidimg" src={slider1} class="d-block w-100" alt="..." />
      <div class="sliderheading">
      <button>Shop Now</button>
      </div>
    </div>
    <div class="carousel-item">
      <img id="slidimg" src={slider2} class="d-block w-100" alt="..." />
      <div class="sliderheading">
      <button>Shop Now</button>
      </div>
    </div>
    <div class="carousel-item">
      <img id="slidimg" src={slider3} class="d-block w-100" alt="..." />
      <div class="sliderheading">
      <button>Shop Now</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default first_page