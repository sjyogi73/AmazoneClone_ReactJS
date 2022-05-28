import React from 'react';
import "./Header.css";

//MUI Icons
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';

import { Link } from 'react-router-dom';

import { useStateValue } from '../Checkout/StateProvider';

const Header=()=>{
  const [{ basket}, dispatch] = useStateValue();
  return (
    <div>
        <div className="header">
            
    {/****Header Logo &  Navigate to the / With Using React dom ' Link ' ***/}
    
    <Link to="/" style={{ textDecoration:"none"}}>
    <div className="header__logo">
        <StorefrontIcon className='header__logoImage' fontSize='large'/>
        <h2 className='header__logoTitle'>e-shop</h2>
    </div>
    </Link>

    {/****Header Search***/}
    <div className="header__search">
      <input type="text" className="header__searchInput"  />
      <SearchIcon className='header__searchIcon'/>
    </div>

    {/****Header Nav Links***/}
  
    <div className="header__nav">
    <Link to="/login" style={{textDecoration:"none"}}>
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Gust</span>
          <span className="nav__itemLineTwo">Signin</span>
        </div>
    </Link>
        
        
        <div className="nav__item">
        <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
    
    {/******Its Navigate To the Checkout Page***** */}
       
       <Link to="/checkout" style={{ textDecoration:"none"}}>
       <div className="nav__item" id='nav__item'>
          <AddShoppingCartIcon  className='nav__itemBasket'/>
          <span className="nav_itemLineTwo nav__basketCount">{basket.length}</span>
        </div>
       </Link>
        
    </div>
  </div>
   
   
   
  </div>
  )
}

export default Header