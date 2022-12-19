import React from 'react'
import "./dance.css"
import { Link } from "react-router-dom";

function Product() {
  return (
     <div className='newproduct'>
  <h1>New<span>Products</span></h1>
  <p>Buy Products From Here</p>
  <selection className="section new-arival">
    <div className='title'>

    </div> 
     <div className='product-center'>
      <div className='product-item'>
       <div className='overlay'>
        <a href='' className='product-thumb'>
          <img src="https://www.jiomart.com/images/product/330x410/rvymz2bvku/black-casual-shoes-sneakers-product-images-rvymz2bvku-0-202206030134.jpg" alt="" />
        </a>
        {/* <span className='discount'>50%</span> */}
       </div>
       <div className='product-info'>
        <span>Casual Shoe</span>
        <Link to="/details">See product details</Link>
        {/* <a href=''></a> */}
        <h4>$200</h4>
       </div>
       <ul className='icons'>
        <li><i class='bx bx-search'></i></li>
        <li><i class='bx bx-cart'></i></li>
       </ul>
      </div>

      <div className='product-item'>
       <div className='overlay'>
        <a href='' className='product-thumb'>
          <img src="https://www.jiomart.com/images/product/150x150/rvghg1mwvr/cosmus-atomic-dx-laptop-bag-black-navy-blue-product-images-orvghg1mwvr-p590974039-0-202201010958.jpg" alt="" />
        </a>
        {/* <span className='discount'>50%</span> */}
       </div>
       <div className='product-info'>
        <span>Bag</span>
        {/* <a href=''>See product details</a> */}
        <Link to="/details">See product details</Link>
        <h4>$300</h4>
       </div>
       <ul className='icons'>
        <li><i class='bx bx-search'></i></li>
        <li><i class='bx bx-cart'></i></li>
       </ul>
      </div>
      
      
      <div className='product-item'>
       <div className='overlay'>
        <a href='' className='product-thumb'>
          <img src="https://www.jiomart.com/images/product/330x410/rvweptwyiw/smartees-men-full-sleeve-black-hooded-sweatshirt-product-images-rvweptwyiw-0-202212010853.jpg" alt="" />
        </a>
        {/* <span className='discount'>50%</span> */}
       </div>
       <div className='product-info'>
        <span>Black Hoodies</span>
        {/* <a href=''>See product details</a> */}
        <Link to="/details">See product details</Link>
        <h4>$900</h4>
       </div>
       <ul className='icons'>
        <li><i class='bx bx-search'></i></li>
        <li><i class='bx bx-cart'></i></li>
       </ul>
      </div>

      
      <div className='product-item'>
       <div className='overlay'>
        <a href='' className='product-thumb'>
          <img src="https://www.jiomart.com/images/product/330x410/rvraek9y93/pause-cotton-maroon-low-cut-stand-collar-slim-fit-full-sleeve-men-s-jacket-product-images-rvraek9y93-0-202211051757.jpg" alt="" />
        </a>
        {/* <span className='discount'>50%</span> */}
       </div>
       <div className='product-info'>
        <span>Men's Wear</span>
        {/* <a href=''>See product details</a> */}
        <Link to="/details">See product details</Link>
        <h4>$1000</h4>
       </div>
       <ul className='icons'>
        <li><i class='bx bx-search'></i></li>
        <li><i class='bx bx-cart'></i></li>
       </ul>
      </div>

      
      <div className='product-item'>
       <div className='overlay'>
        <a href='' className='product-thumb'>
          <img src="https://www.jiomart.com/images/product/330x410/rvsocrshcu/popwings-single-button-closure-women-black-shrug-product-images-rvsocrshcu-0-202211040421.jpg" alt="" />
        </a>
        {/* <span className='discount'>50%</span> */}
       </div>
       <div className='product-info'>
        <span>Women's Wear</span>
        {/* <a href=''>See product details</a> */}
        <Link to="/details">See product details</Link>
        <h4>$1200</h4>
       </div>
       <ul className='icons'>
        <li><i class='bx bx-search'></i></li>
        <li><i class='bx bx-cart'></i></li>
       </ul>
      </div>
      
      <div className='product-item'>
       <div className='overlay'>
        <a href='' className='product-thumb'>
          <img src="https://www.jiomart.com/images/product/360x360/997188/stars-gold-15-gm-prod-997188-0-202209250757.jpg" alt="" />
        </a>
        {/* <span className='discount'>50%</span> */}
       </div>
       <div className='product-info'>
        <span>Foundation</span>
        {/* <a href=''>See product details</a> */}
        <Link to="/details">See product details</Link>
        <h4>$600</h4>
       </div>
       <ul className='icons'>
        <li><i class='bx bx-search'></i></li>
        <li><i class='bx bx-cart'></i></li>
       </ul>
      </div>

      
      <div className='product-item'>
       <div className='overlay'>
        <a href='' className='product-thumb'>
          <img src="https://www.jiomart.com/images/product/360x360/1002024/stars-translucent-powder-yellow-gold-20-gm-prod-1002024-0-202209231754.jpg" alt="" />
        </a>
        {/* <span className='discount'>50%</span> */}
       </div>
       <div className='product-info'>
        <span>Moisturizer</span>
        {/* <a href=''>See product details</a> */}
        <Link to="/details">See product details</Link>
        <h4>$750</h4>
       </div>
       <ul className='icons'>
        <li><i class='bx bx-search'></i></li>
        <li><i class='bx bx-cart'></i></li>
       </ul>
      </div>
      
      <div className='product-item'>
       <div className='overlay'>
        <a href='' className='product-thumb'>
          <img src="https://www.jiomart.com/images/product/150x150/rvgqeumxas/uninox-stainless-steel-thermoware-casserole-hot-pot-for-hot-meal-chapati-roti-1500ml-product-images-orvgqeumxas-p591124477-0-202202261139.jpg" alt="" />
        </a>
        {/* <span className='discount'>50%</span> */}
       </div>
       <div className='product-info'>
        <span>Hot-Pot</span>
        {/* <a href=''>See product details</a> */}
        <Link to="/details">See product details</Link>
        <h4>$990</h4>
       </div>
       <ul className='icons'>
        <li><i class='bx bx-search'></i></li>
        <li><i class='bx bx-cart'></i></li>
       </ul>
      </div>
      
      <div className='product-item'>
       <div className='overlay'>
        <a href='' className='product-thumb'>
          <img src="https://www.jiomart.com/images/product/150x150/491582998/freshomz-twilight-garden-jasmine-air-freshener-10-g-product-images-o491582998-p491582998-0-202203152252.jpg" alt="" />
        </a>
        {/* <span className='discount'>50%</span> */}
       </div>
       <div className='product-info'>
        <span>Air Freshner</span>
        {/* <a href=''>See product details</a> */}
        <Link to="/details">See product details</Link>
        <h4>$100</h4>
       </div>
       <ul className='icons'>
        <li><i class='bx bx-search'></i></li>
        <li><i class='bx bx-cart'></i></li>
       </ul>
      </div>
      <div className='product-item'>
       <div className='overlay'>
        <a href='' className='product-thumb'>
          <img src="https://www.jiomart.com/images/product/150x150/rva7iv8pun/care-view-3-ply-disposable-cotton-face-masks-pack-of-50-blue-for-unisex-with-nose-pin-bis-isi-certified-mask-with-melt-blown-layer-product-images-orva7iv8pun-p591120424-0-202202260813.jpg" alt="" />
        </a>
        {/* <span className='discount'>50%</span> */}
       </div>
       <div className='product-info'>
        <span>Face Mask</span>
        {/* <a href=''>See product details</a> */}
        <Link to="/details">See product details</Link>
        <h4>$250</h4>
       </div>
       <ul className='icons'>
        <li><i class='bx bx-search'></i></li>
        <li><i class='bx bx-cart'></i></li>
       </ul>
      </div>
      <div className='product-item'>
       <div className='overlay'>
        <a href='' className='product-thumb'>
          <img src="https://www.jiomart.com/images/product/150x150/rvl6bbfwiq/hikvision-1mp-eco-series-ds-2ce5ac0t-irp-eco-720p-turbo-hd-night-vision-dome-camera-1qty-product-images-orvl6bbfwiq-p592227888-0-202206271454.jpg" alt="" />
        </a>
        {/* <span className='discount'>50%</span> */}
       </div>
       <div className='product-info'>
        <span>Camera</span>
        {/* <a href=''>See product details</a> */}
        <Link to="/details">See product details</Link>
        <h4>$800</h4>
       </div>
       <ul className='icons'>
        <li><i class='bx bx-search'></i></li>
        <li><i class='bx bx-cart'></i></li>
       </ul>
      </div>

      <div className='product-item'>
       <div className='overlay'>
        <a href='' className='product-thumb'>
          <img src="https://www.jiomart.com/images/product/150x150/rvu3ek5xgz/carmate-universal-pu-leather-auto-car-seat-back-organizer-with-foldable-dining-table-tray-multipocket-storage-tablet-bottle-and-tissue-paper-holder-coffee-product-images-orvu3ek5xgz-p591188272-0-202203012022.jpg" alt="" />
        </a>
        {/* <span className='discount'>50%</span> */}
       </div>
       <div className='product-info'>
        <span>Car Seat</span>
        {/* <a href=''>See product details</a> */}
        <Link to="/details">See product details</Link>
        <h4>$700</h4>
       </div>
       <ul className='icons'>
        <li><i class='bx bx-search'></i></li>
        <li><i class='bx bx-cart'></i></li>
       </ul>
      </div>

      <div className='product-item'>
       <div className='overlay'>
        <a href='' className='product-thumb'>
          <img src="https://www.jiomart.com/images/product/150x150/rvbgdcfhuz/qualitio-pop-it-for-kids-stress-relief-for-adults-round-product-images-orvbgdcfhuz-p591102117-0-202202251933.jpg" alt="" />
        </a>
        {/* <span className='discount'>50%</span> */}
       </div>
       <div className='product-info'>
        <span>Stress Relief</span>
        {/* <a href=''>See product details</a> */}
        <Link to="/details">See product details</Link>
        <h4>$150</h4>
       </div>
       <ul className='icons'>
        <li><i class='bx bx-search'></i></li>
        <li><i class='bx bx-cart'></i></li>
       </ul>
      </div>
      <div className='product-item'>
       <div className='overlay'>
        <a href='' className='product-thumb'>
          <img src="https://www.jiomart.com/images/product/150x150/rvla8qklno/deals-india-cute-adorable-husky-dog-soft-toy-for-kids-playing-28-cm-yellow-white-product-images-orvla8qklno-p591738687-0-202205302220.jpg" alt="" />
        </a>
        {/* <span className='discount'>50%</span> */}
       </div>
       <div className='product-info'>
        <span>Husky Dog</span>
        <a href=''>See product details</a>
        <h4>$400</h4>
       </div>
       <ul className='icons'>
        <li><i class='bx bx-search'></i></li>
        <li><i class='bx bx-cart'></i></li>
       </ul>
      </div>

      <div className='product-item'>
       <div className='overlay'>
        <a href='' className='product-thumb'>
          <img src="https://www.jiomart.com/images/product/150x150/rvrrecps8z/webby-soft-animal-plush-elephant-toy-grey-20-cm-x-10-cm-product-images-orvrrecps8z-p590827436-0-202203252255.jpg" alt="" />
        </a>
        {/* <span className='discount'>50%</span> */}
       </div>
       <div className='product-info'>
        <span>Elephant Toy</span>
        <a href=''>See product details</a>
        <h4>$700</h4>
       </div>
       <ul className='icons'>
        <li><i class='bx bx-search'></i></li>
        <li><i class='bx bx-cart'></i></li>
       </ul>
      </div>
      <div className='product-item'>
       <div className='overlay'>
        <a href='' className='product-thumb'>
          <img src="https://www.jiomart.com/images/product/150x150/490010311/amul-taaza-homogenised-toned-milk-1-l-tetra-pak-product-images-o490010311-p490010311-0-202203152257.jpg" alt="" />
        </a>
        {/* <span className='discount'>50%</span> */}
       </div>
       <div className='product-info'>
        <span>Toned Milk</span>
        <a href=''>See product details</a>
        <h4>$80</h4>
       </div>
       <ul className='icons'>
        <li><i class='bx bx-search'></i></li>
        <li><i class='bx bx-cart'></i></li>
       </ul>
      </div>

      <div className='product-item'>
       <div className='overlay'>
        <a href='' className='product-thumb'>
          <img src="https://www.jiomart.com/images/product/150x150/490800934/go-plain-cheese-slices-476-g-pouch-product-images-o490800934-p490800934-0-202203142126.jpg" alt="" />
        </a>
        {/* <span className='discount'>50%</span> */}
       </div>
       <div className='product-info'>
        <span>Crunch</span>
        <a href=''>See product details</a>
        <h4>$50</h4>
       </div>
       <ul className='icons'>
        <li><i class='bx bx-search'></i></li>
        <li><i class='bx bx-cart'></i></li>
       </ul>
      </div>
      <div className='product-item'>
       <div className='overlay'>
        <a href='' className='product-thumb'>
          <img src="https://www.jiomart.com/images/product/360x360/1022922/la-french-romance-oud-eau-de-parfum-100-ml-prod-1022922-0-202208040740.jpg" alt="" />
        </a>
        {/* <span className='discount'>50%</span> */}
       </div>
       <div className='product-info'>
        <span>Perfume</span>
        <a href=''>See product details</a>
        <h4>$650</h4>
       </div>
       <ul className='icons'>
        <li><i class='bx bx-search'></i></li>
        <li><i class='bx bx-cart'></i></li>
       </ul>
      </div>
      <div className='product-item'>
       <div className='overlay'>
        <a href='' className='product-thumb'>
          <img src="https://www.jiomart.com/images/product/360x360/1036583/lattafa-ana-abiyedh-long-lasting-imported-eau-de-perfume-30-ml-prod-1036583-0-202207300945.jpg" alt="" />
        </a>
        {/* <span className='discount'>50%</span> */}
       </div>
       <div className='product-info'>
        <span>Perfume</span>
        <a href=''>See product details</a>
        <h4>$550</h4>
       </div>
       <ul className='icons'>
        <li><i class='bx bx-search'></i></li>
        <li><i class='bx bx-cart'></i></li>
       </ul>
      </div>
      
       
    </div> 
   </selection> 

   
    </div> 

  )
}

export default Product