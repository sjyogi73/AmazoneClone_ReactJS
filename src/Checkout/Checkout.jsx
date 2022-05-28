import React from 'react'; 
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
//MUI Avathor

const Checkout=()=> {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      
      <div className="checkout__left">
        <img src="https://www.nicepng.com/png/full/830-8304192_ecommerce-development-bottom-banner-ecommerce-banner-png.png" 
        alt="Ad-Banner-img" 
        className="checkout__ad"
        />
        <div>
            <h2 className="checkout__title">
                 Shoping Basket
            </h2>
            
            {/***** JS OBJECT  For mapping Data **** */}
            {
              basket.map(item => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}

                />
              )
              )}
        </div>
      </div>
      
      <div className="checkout__right">
        <Subtotal/>
      </div>  
    </div>
  )
}

export default Checkout