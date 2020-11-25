import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ShoppingCart from '../iconComponents/ShoppingCart';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <div className ='header'>
        <Link 
          to='/home/All' 
          className='header' 
          onClick={closeMobileMenu}>
          Vancouver Main St.
        </Link>
      </div>
      <nav className='navbar'>
        <div className='navbar-container'>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link 
                to='/home/All' 
                className='nav-links' 
                onClick={closeMobileMenu}>
                All
              </Link>
            </li>
            <li className='nav-item'>
              <Link 
                to='/home/Flower' 
                className='nav-links' 
                onClick={closeMobileMenu}>
                Flower
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/home/Pre-Rolls'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Pre-Rolls
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/home/Vaporizers'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Vapourizers
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/home/Concentrates'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Concentrates
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/home/Edibles'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Edibles
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/home/Topicals'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Topicals
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/home/Accessories'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Accessories
              </Link>
            </li>
          </ul>
          
     
        </div>
      </nav>
    </>
  );
}

export default Navbar;