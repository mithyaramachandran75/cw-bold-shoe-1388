import React from 'react'
import './balance.css'

const Balance = () => {
  return (
    <div>
   <div className='container cart'>
    <table>
        <tr>
            <th>product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
        </tr>
        <tr>
            <td>
                <div className='cart-info'>
                    <img src="https://www.jiomart.com/images/product/330x410/rvymz2bvku/black-casual-shoes-sneakers-product-images-rvymz2bvku-0-202206030134.jpg" alt="" />
                <div>
                <p>casual shoe</p>
                <span>price:$700</span>
                <a href="#">remove</a>
                </div>
                </div>
            </td>
            <td><input type="number" value="1" min="1" /></td>
           <td>$700</td>
        </tr>
        <tr>
            <td>
                <div className='cart-info'>
                    <img src="https://www.jiomart.com/images/product/330x410/rvymz2bvku/black-casual-shoes-sneakers-product-images-rvymz2bvku-0-202206030134.jpg" alt="" />
                <div>
                <p>casual shoe</p>
                <span>price:$700</span>
                <a href="#">remove</a>
                </div>
                </div>
            </td>
            <td><input type="number" value="1" min="1" /></td>
           <td>$700</td>
        </tr>
        
        <tr>
            <td>
                <div className='cart-info'>
                    <img src="https://www.jiomart.com/images/product/330x410/rvymz2bvku/black-casual-shoes-sneakers-product-images-rvymz2bvku-0-202206030134.jpg" alt="" />
                <div>
                <p>casual shoe</p>
                <span>price:$700</span>
                <a href="#">remove</a>
                </div>
                </div>
            </td>
            <td><input type="number" value="1" min="1" /></td>
           <td>$700</td>
        </tr>
    </table>
    <div className='total-price'>
        <table>
            <tr>
                <td>SubTotal</td>
                <td>$1400</td>
            </tr>
            <tr>
            <td>Tax</td>
            <td>$30</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>$1370</td>
            </tr>
        </table>
        <a href='#' className='checkout btn'>Process</a>
    </div>
   </div>

    </div>
  )
}

export default Balance