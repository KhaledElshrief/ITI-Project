import React from "react";
import styles from './product.module.css';
import { Link } from "react-router-dom";
import IncDec from "./IncDec";
import { blue } from "@mui/material/colors";
import ProductInfo from "./ProductInfo";
import axios from "axios";
import { useParams } from 'react-router-dom';
const { useState, useEffect } = React

export default function ProductDetails() {

  const { id } = useParams();
  const [data, setData] = useState([]);

  const imgs = document.querySelectorAll('.img_select a');
  const imgBtns = [...imgs];
  let imgId = 1;

 imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

useEffect(()=> {
  axios.get(`http://localhost:3000/products/${id}`).then((res)=> {
    const productData = res.data
    const lsCartItems = localStorage.getItem('cartItems');
    const cartItems = lsCartItems ? JSON.parse(lsCartItems) : [];
    productData.addedToCart = cartItems.includes(res.data.id);
    setData(productData)
  });
  

}, [data])



function slideImage(){
    const displayWidth = document.querySelector('.img_showcase img:first-child').clientWidth;

    document.querySelector('.img_showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

const LikeUsOnFacebookButton = ({ url = "https://www.facebook.com/" }) => (
  <a className="facebook_button" target="_blank" href={url}>
    <FacebookSVG 
      width="30px"
      height="30px"
      />
    Like Us On Facebook!
  </a>
);

const FacebookSVG = ({ style = {}, fill="#ffffff", className="", width="100%", height="100%", viewBox="0 0 408.788 408.788", d="" }) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    >
    <path fill={fill} 
      d="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085
       h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882
       v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955
       l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087
       c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085
       C408.786,24.662,384.124,0,353.701,0z"
      />
  </svg>
);

  return <>
   
   <div className = {styles.card_wrapper}>
  <div className = {styles.card}>

    <div className = {styles.product_imgs}>
      <div className = {styles.img_display}>
        <div className = {`${styles.img_showcase} img_showcase`}>
          <img src = { data.imageURL } alt = "shoe image" />
          <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt = "shoe image" />
          <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt = "shoe image" />
          <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt = "shoe image" />
        </div>
      </div>
      <div className ={`${styles.img_select} img_select`}>
        <div className = {styles.img_item}>
          <Link  s= "#" data-id = "1">
            <img   src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt = "shoe image" />
          </Link >    </div>
        <div className = {styles.img_item}>
          <Link  to= "#" data-id = "2">
            <img  src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt = "shoe image" />
          </Link >    </div>
        <div className = {styles.img_item}>
          <Link  to= "#" data-id = "3">
            <img  src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt = "shoe image" />
          </Link >    </div>
        <div className = {styles.img_item}>
          <Link  to= "#" data-id = "4">
            <img  src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt = "shoe image" />
          </Link >    </div>
      </div>
    </div>


    <div  className = {styles.product_content}>
      <h2 className = {styles.product_title}>{ data.name }</h2>
       <div style={{display: 'flex', gap: '10%'}}  className = {`${styles.product_rating } product-rating `} >
        <div>
        <i className = "fas fa-star"></i>  
        <i className = "fas fa-star"></i>
        <i className = "fas fa-star"></i>
        <i className = "fas fa-star"></i>
        <i className = "fas fa-star"></i>
        <i className = "fas fa-star-half-alt"></i>
        </div>
        <span style={{color: 'rgb(204, 204, 204)'}}>{ data.rating?.count } reviews </span>
        <span style={{color: '#00BFFF'}}>Submit a review </span>
      </div>



      <div className = {styles.product_price}>
        <p className = {styles.new_price}><span>${ data.price * 0.8 }</span></p>
        <p className = {styles.current_price}> <span>${ data.price }</span></p>
        <p className = {styles.last_price}> <span style={{fontWeight: 'bold'}}>20% OFF</span></p>
      </div>

      <div className = {styles.product_detail}>
        <div  className="row">
          
        <ul className={styles.ul_product_lists}>
    
          <li>Availablity: <span>{ data.is_in_inventory ?  'In Stock' : 'Out Of Stock' }</span></li>
          <li>Category: <span>{ data.category }</span></li>
          <li>Shipping Fees: <span>Free</span></li>
          <li>Items Left: <span>{data.items_left}</span></li>

        </ul>
          <div className={styles.main_inputs}>
             <div className={styles.colorChange}>
              <div><span> Select color</span> </div>
              <div className={styles.colorrrs}>
                <input type="color" className={styles.style1} value={blue}/> <input className={styles.style1} type="color" id="style1" value='red'/>
              <input className={styles.style1} type="color" id="style1" value='black'/> <input className={styles.style1} type="color" id="style1" value='yellow'/>
                </div>

             </div>
	        
	        				
                  <div style={{width: '45%',  margin: '.5rem .1rem'}} className={styles.sizes_input}>
	        				<span>Size</span>
								<select id="size" name="size" className={`${styles.form_control} form-control`} >
									<option>S</option>
									<option>M</option>
									<option>L</option>
									<option>XL</option>
								</select>
	        				</div>
	        			</div>
                </div>
      </div>
  <div className={styles.thirdSection}>
      <div className = {styles.purchase_info}>
        <IncDec className={styles.IncDe}/>  
        <div className={styles.mainBtns}> 
        <button style={{ display: data.addedToCart ? 'none' : 'block' }} type = "button" className ={`${styles.btn} btn `} onClick={()=> {
          const lsCartItems = localStorage.getItem('cartItems');
          const cartItems = lsCartItems ? JSON.parse(lsCartItems) : [];
          cartItems.push(data.id);
          localStorage.setItem('cartItems', JSON.stringify(cartItems))
          data.addedToCart = !data.addedToCart;
        }}>
          Add To Cart <i className = "fas fa-shopping-cart"></i>
        </button>

        <button style={{ display: data.addedToCart ? 'block' : 'none' }} type = "button" className ={`${styles.btn} btn `} onClick={()=> {
          const lsCartItems = localStorage.getItem('cartItems');
          let cartItems = lsCartItems ? JSON.parse(lsCartItems) : [];
          cartItems = cartItems.filter(i => i !== data.id);
          localStorage.setItem('cartItems', JSON.stringify(cartItems))
          data.addedToCart = true;
          console.log(data, cartItems);
        }}>
          Remove From Cart <i className = "fas fa-shopping-cart"></i>
        </button>

        <button type = "button" className ={styles.btn} > <i className="fa-regular fa-heart "></i></button>
        </div>
        <div>

     

        </div>

       </div>
       <div className={styles.socialBtns}>

<div className={styles.fbMainBtn}>
<a href="https://www.facebook.com/XMehdiHack2" target="_blank">
<input type="submit" className={styles.XM} value="Facebook" title="Add Me On Facebook"/></a>
  </div>

  <div className={styles.fbMainBtn}>
<a href="https://www.facebook.com/XMehdiHack2" target="_blank">
 <input type="submit" style={{background: '#00BFFF'}} className={styles.XM} value="Twitter" title="Add Me On Facebook"/></a>
  </div> 

</div>
        </div>
    </div>
  </div>

</div>
 
  <ProductInfo/>

  <div>
    <div className={styles.relatedProducts}>
       <h1>
        <b>
        Related Products
        </b>
       </h1>

    </div>
  </div>

      
      
  </>;
}
