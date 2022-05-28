import React from 'react'
import "./Product.css";
import { useStateValue } from '../Checkout/StateProvider';


const Product=({id,title,image,price,rating})=> {
  
  const [state,dispatch] = useStateValue();

  const addToBasket = () => {
        dispatch({
          type: 'ADD_TO_BASKET',
          item: {
            id: id,
            image: image,
            price: price,
            rating: rating,
          },
          });
  }
  
  return (
    <div className='full_Product'>     
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
               
                <div className="product__rating">⭐⭐
                {Array(rating)
                  .fill()
                  .map((_,i) =>(
                    <span key={i}>⭐</span>
                  ))}
                  </div>
            </div>
            <img src={image} 
            alt="Product_image" 
            className='Product_image'
            />
             <p className='product__price'>
                  <small>$</small> 
                  <strong>{price}</strong>
                   </p>
            <button onClick={addToBasket}>Add To Basket</button>        
        </div>
    </div>
  )
}

export default Product