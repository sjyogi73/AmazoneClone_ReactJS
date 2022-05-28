import React from 'react'
import "./CheckoutProduct.css"
import {useStateValue} from './StateProvider';

function CheckoutProduct({id, title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();
  

//Based on the id we will remove the product from the basket
  const removeFromBasket =()=>{
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }
  
  
  return (
    <div>
       <div className="checkoutProduct">
          <img src={image} 
            alt="CheckOut_img" 
            className='checkoutProduct__image'
          />  

          <div className="checkoutProduct__info">
              <p className="checkoutProduct__title">
                {title}
              </p>
              <p className="checkoutProduct__price">
                  <small>$</small> 
                  <strong>{price}</strong>
              </p>
              <div className="checkoutProduct__rating">
              {Array(rating)
                    .fill()
                    .map((_,i) =>(
                    <p>⭐</p>
                  ))}
              </div>
              <button onClick={removeFromBasket} >Remove </button>
          </div>         
      </div>
  
  </div>
  )
}

export default CheckoutProduct