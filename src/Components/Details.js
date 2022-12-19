import React from 'react'
import './details.css'
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div>
    <section className='section product-detail'>
        <div className='details container'>
            <div className='left image-container'>
            <div className='main'>
            <img src="https://www.jiomart.com/images/product/330x410/rvymz2bvku/black-casual-shoes-sneakers-product-images-rvymz2bvku-0-202206030134.jpg"  alt="" />
            </div>
            </div>
      <div className='right'>
        <span>Casual Shoe</span>
        <h1>Shoes</h1>
        <h1>$200</h1>
        <form action="">
          <div>
            <select name='' id=''>
          <option value="select Sizer" selected disabled>Select Size</option>
          <option value="1">10</option>
          <option value="2">15</option>
          <option value="3">20</option>
          </select>
          </div>
        </form>
        <form action='' className='form'>
          <input type="text" placeholder='1' />
          <Link to="/balance" className="addCart">Add</Link>
        </form>

        </div>      
        </div>
    </section>

    </div>
  )
}

export default Details