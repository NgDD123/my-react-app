import React from 'react';
import { Link } from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import { AiOutlineSearch } from 'react-icons/ai';

import  "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
     <div className='navbar-container'>
        <Link to="/" className='navbar-log'>
        GBBC
        </Link>
        <div className="links">
          <Link to="/"> GBBC </Link>
          <Link to="/deliver-to">Deliver to worldwide</Link>
          <Link to="/service">Services</Link>
          <div className='searchbar'>
           <input className='seach-input' type='text' ></input>
           <AiOutlineSearch className='search-icon' size={40}/>
          </div>
          <div className='navbar-options'>
          <Link to="login">
            <div className='nav-options'>
              <span className='nov-optionOne'>Customer</span>
              <span className='nov-optionTwo'>Sing In</span>
            </div>
          </Link>
            
          </div>
          <Link to="/shop"> Shop </Link>
          <Link to="/contact"> Contact</Link>
          <div className='navbar-option'>
            <div className='nav-options'>
              <span className='nov-optionOne'>Returns</span>
              <span className='nov-optionTwo'>& Orders</span>
            </div>
          </div>
          <Link to="/cart">
            <ShoppingCart size={32}/>  
          </Link>
        </div>
      </div> 
    </div>
  )
}
