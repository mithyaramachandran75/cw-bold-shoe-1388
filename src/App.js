import './App.css';
import First_page from './Components/First_page';
import Footer from "./footer/Footer"
import Dance from './Components/Dance';
import Dance1 from './Components/Dance1';
import Product from './Components/Product';
import Header from './Components/Header';

import {
  Routes,
  Route,
} from 'react-router-dom';
import Details from './Components/Details';
import Balance from './Components/Balance'
import Login from "./Components/login"


function App() {

  let card=[
    {
     img:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1669785693_Wonderchef_Desktop.jpg',
     hed:'Lorem',
     parg:'welcome In  learning tech channel'
     
    },
    {
     img:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1669785711_Lifelong_Desktop.jpg',
     hed:'Lorem',
     parg:'welcome In  learning tech Channel'
    },
    {
     img:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1669789323_Tecno_Desktop.jpg',
     hed:'Lorem',
     parg:'welcome In learning tech  channel'
    },
    {
      img:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1670350341_Samsung_Desktop_version.jpg',
      hed:'Lorem',
      parg:'welcome In learning tech  channel'
     },
     {
      img:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1670956920_0___Shop_From_Top_Categories___HPC_Ministore_Tile.jpg',
      hed:'Lorem',
      parg:'welcome In  learning tech channel'
     },
     {
      img:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1670842891_1669789269_MI_Desktop.jpg',
      hed:'Lorem',
      parg:'welcome In  learning tech Channel'
     },
     {
      img:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1669703054_1669120666_Tea__Coffee.jpg',
      hed:'Lorem',
      parg:'welcome In learning tech  channel'
     },
     {
       img:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1669703137_1669120884_Biscuits__Cookies.jpg',
       hed:'Lorem',
       parg:'welcome In learning tech  channel'
      },
      {
       img:'https://www.jiomart.com/images/product/150x150/491696003/sugar-m-2-kg-product-images-o491696003-p590108360-0-202205272027.jpg',
       hed:'Lorem',
       parg:'welcome In  learning tech channel'
      },
      {
       img:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1670350341_Samsung_Desktop_version.jpg',
       hed:'Lorem',
       parg:'welcome In  learning tech Channel'
      },
      {
       img:'https://www.jiomart.com/images/product/150x150/rv7dypcv7s/muscleblaze-beginner-s-whey-protein-supplement-chocolate-1-kg-2-2-lb-33-servings-product-images-orv7dypcv7s-p591795880-0-202206011250.jpg',
       hed:'Lorem',
       parg:'welcome In learning tech  channel'
      },
      {
        img:'https://www.jiomart.com/images/product/150x150/492850895/motorola-moto-g42-64gb-4gb-ram-metallc-rose-mobile-phone-digital-o492850895-p592617135-0-202207151324.jpeg',
        hed:'Lorem',
        parg:'welcome In  learning tech Channel'
       },
       {
        img:'https://www.jiomart.com/images/product/150x150/490005648/saffola-gold-healthy-lifestyle-rice-bran-based-blended-oil-5-l-1-l-free-product-images-o490005648-p490005648-0-202204281547.jpg',
        hed:'Lorem',
        parg:'welcome In  learning tech Channel'
        
       },
       {
        img:'https://www.jiomart.com/images/product/150x150/rvp877ktho/homefab-india-144-tc-microfiber-single-bedsheet-with-1-pillow-cover-yellow-floral-product-images-orvp877ktho-p592357586-0-202207042308.jpg',
        hed:'Lorem',
        parg:'welcome In learning tech  channel'
       },
       {
        img:'https://www.jiomart.com/images/product/150x150/rvbcqmzjax/assembly-cabin-luggage-polycarbonate-54-cm-hardsided-suitcase-trolley-blue-white-product-images-orvbcqmzjax-p594196384-0-202212061804.jpg',
        hed:'Lorem',
        parg:'welcome In  learning tech Channel'
       },
       {
        img:'https://www.jiomart.com/images/product/150x150/rvmhkofyoz/basicbelle-water-and-juice-glass-set-315-ml-set-of-6-product-images-orvmhkofyoz-p590614294-0-202108301832.jpg',
        hed:'Lorem',
        parg:'welcome In learning tech  channel'
       },
     //  end first data
 ]
 let cards=[
  {
   img:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1670956920_0___Shop_From_Top_Categories___HPC_Ministore_Tile.jpg',
   hed:'Lorem',
   parg:'welcome In  learning tech channel'
  },
  {
   img:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1669703570_1667906868_Skincare__Hair_care.jpg',
   hed:'Lorem',
   parg:'welcome In  learning tech Channel'
  },
  {
   img:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1670350107_Shop-From-Top-Categories-20.jpg',
   hed:'Lorem',
   parg:'welcome In learning tech  channel'
  },
  {
    img:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1669703054_1669120666_Tea__Coffee.jpg',
    hed:'Lorem',
    parg:'welcome In learning tech  channel'
   },
   {
    img:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1669703054_1669120666_Tea__Coffee.jpg',
    hed:'Lorem',
    parg:'welcome In  learning tech channel'
   },
   {
    img:'https://www.jiomart.com/images/product/150x150/rvfhjtvmfd/scotch-brite-2-in-1-bucket-spin-mop-product-images-orvfhjtvmfd-p590860581-0-202111130939.jpg',
    hed:'Lorem',
    parg:'welcome In  learning tech Channel'
   },
   {
    img:'https://www.jiomart.com/images/product/150x150/rv7dypcv7s/muscleblaze-beginner-s-whey-protein-supplement-chocolate-1-kg-2-2-lb-33-servings-product-images-orv7dypcv7s-p591795880-0-202206011250.jpg',
    hed:'Lorem',
    parg:'welcome In learning tech  channel'
   },
   {
     img:'https://www.jiomart.com/images/product/150x150/492850895/motorola-moto-g42-64gb-4gb-ram-metallc-rose-mobile-phone-digital-o492850895-p592617135-0-202207151324.jpeg',
     hed:'Lorem',
     parg:'welcome In  learning tech Channel'
    },
    {
     img:'https://www.jiomart.com/images/product/150x150/490005648/saffola-gold-healthy-lifestyle-rice-bran-based-blended-oil-5-l-1-l-free-product-images-o490005648-p490005648-0-202204281547.jpg',
     hed:'Lorem',
     parg:'welcome In  learning tech Channel'
     
    },
    {
     img:'https://www.jiomart.com/images/product/150x150/rvp877ktho/homefab-india-144-tc-microfiber-single-bedsheet-with-1-pillow-cover-yellow-floral-product-images-orvp877ktho-p592357586-0-202207042308.jpg',
     hed:'Lorem',
     parg:'welcome In learning tech  channel'
    },
    {
     img:'https://www.jiomart.com/images/product/150x150/rvbcqmzjax/assembly-cabin-luggage-polycarbonate-54-cm-hardsided-suitcase-trolley-blue-white-product-images-orvbcqmzjax-p594196384-0-202212061804.jpg',
     hed:'Lorem',
     parg:'welcome In  learning tech Channel'
    },
    {
     img:'https://www.jiomart.com/images/product/150x150/rvmhkofyoz/basicbelle-water-and-juice-glass-set-315-ml-set-of-6-product-images-orvmhkofyoz-p590614294-0-202108301832.jpg',
     hed:'Lorem',
     parg:'welcome In learning tech  channel'
    },
   
   //  end first data
]

  return (
    <div className='background'>
        <Header />
      <div>
       

         <Routes>
    <Route exact path='/home' element={<First_page />}></Route>
    <Route exact path='/mens' element={ <Dance item={card}></Dance>}></Route>
    <Route exact path='/mobiles' element={<Product />}></Route>
    <Route exact path='/makeup' element={<Dance1 item={cards}></Dance1>}></Route>
     <Route exact path='/details' element={<Details />}></Route> 
     <Route exact path='/balance' element={<Balance />}></Route> 
     <Route path='/login' element={<Login />}/>
    {/* <Route exact path='/makeup' element={<Dance1 item={card2}></Dance1>}></Route> */}
        </Routes> 
        </div>       
        <Footer /> 
      
    </div>
  );
}
export default App
