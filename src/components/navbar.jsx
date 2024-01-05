import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { AiOutlineSearch } from 'react-icons/ai';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import './navbar.css';

export const Navbar = () => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleAuthentication = async () => {
    if (user) {
      signOut(auth);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-log">
          GBBC
        </Link>
        <div >
        <div className="links">
            <Link to="/"> GBBC </Link>
            <Link to="/deliver-to">Deliver to worldwide</Link>
            <Link to="/service">Services</Link>
            <div className="searchbar">
              <input className="search-input" type="text" placeholder='Seachbar'/>
              <AiOutlineSearch className="search-icon" size={20} />
            </div>
            <div className="navbar-options">
              <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className="nav-options">
                  <span className="nov-optionOne">
                    Hello{!user ? ' Customer' : user.email}
                  </span>
                  <span className="nov-optionTwo">
                    {user ? ' Sign Out' : ' Sign In'}
                  </span>
                </div>
              </Link>
            </div>
            <Link to="/shop"> Shop </Link>
            <Link to="/contact"> Contact</Link>
            <div className="navbar-option">
              <div className="nav-options">
                <span className="nov-optionOne">Returns</span>
                <span className="nov-optionTwo">& Orders</span>
              </div>
            </div>
            <Link to="/cart">
              <ShoppingCart size={32} />
            </Link>
        </div>
          <div  className="additional-categories">
            <Link to="/electronics" >Electronics</Link>
            <Link to="/property">Property</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/automotive-vehicles">Automotive Vehicles</Link>
            <Link to="/services">Services</Link>
            <Link to="/boats-watercraft">Boats & Watercraft</Link>
            <Link to="/more-categories">More Categories</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
