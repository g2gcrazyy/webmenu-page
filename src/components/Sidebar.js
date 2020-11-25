  
import React, { useState } from 'react';
import './Sidebar.css';

import SVGsearch from '../iconComponents/Search';
import Sort from '../iconComponents/Sort';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'
import { useHistory } from "react-router-dom";

function Sidebar() {


  let history = useHistory();
  var match = sessionStorage.getItem('path');
  var match1 = sessionStorage.getItem('type');
  var match2 = sessionStorage.getItem('filter');
  var match3 = sessionStorage.getItem('brand');
  var match4 = sessionStorage.getItem('searchtext');
  var match5 = sessionStorage.getItem('sort');

  const url = '/home/' + match + '/' + match2 + '/' + match3;


  
  
  var brandname = match3;

  if (brandname == "brand"){
    brandname = "Shop by Brand"
  }

  const [click, setClick] = useState(false);

  const [title, setTitle] = useState('search');

  sessionStorage.setItem('title', title);



  return (
    <>
        <div className='side-menu'>
          <ul className='side-menu-items' >

            <div className='side-menu-hours'>
              <div className='side-menu-hours-open'>
                OPEN
              </div>
              <div className='side-menu-hours-pickup'>
                Pickup
              </div>
              <div className='side-menu-hours-more'>
                Hours and more
              </div>
            </div>

            <div className='side-menu-search'>
              <div className='logo-color'>
                <SVGsearch />
              </div>
              <div className='side-menu-search-text'>
                <form className='side-menu-search-text'>
                  <input onChange={event => setTitle(event.target.value)} type="search" className='side-menu-search-text' id="fname" name="search" placeholder="Search menu..."></input>
                </form>
              </div>
            </div>

            <h4>BRAND</h4>
            
            <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic" className='side-menu-brand'>
                    {brandname} <div><Sort /></div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className='side-menu-brand-dropdown'>
                    <Dropdown.Item 
                      className='side-menu-brand-dropdown' 
                      href={'/home/' + match + '/' + match2 +'/7ACERS'}>
                        7ACERS
                    </Dropdown.Item>
                    <Dropdown.Item className='side-menu-brand-dropdown' href={'/home/' + match + '/' + match2 +'/ALTAVIE'}>ALTAVIE</Dropdown.Item>
                    <Dropdown.Item className='side-menu-brand-dropdown' href={'/home/' + match + '/' + match2 +'/AURORA'}>AURORA</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

            <h4>TYPES</h4>
            <ul className='side-menu-types'>
              <Link 
                to={match2 === 'Sativa'? '/home/' + match + '/filter' + '/' + match3 : '/home/' + match + '/Sativa' + '/' + match3 }
                className={match2 === 'Sativa' ? 'side-menu-filters-links active'  : 'side-menu-filters-links' }
                >
                <li> Sativa</li>
              </Link>
              <Link 
                to={match2 === 'High-CBD'? '/home/' + match + '/filter' + '/' + match3 : '/home/' + match + '/High-CBD' + '/' + match3 }
                className={match2 === 'High-CBD' ? 'side-menu-filters-links active'  : 'side-menu-filters-links' }
                >
                <li> High CBD</li>
              </Link>
              <Link 
                to={match2 === 'Indica'? '/home/' + match + '/filter' + '/' + match3 : '/home/' + match + '/Indica' + '/' + match3 }
                className={match2 === 'Indica' ? 'side-menu-filters-links active'  : 'side-menu-filters-links' }
                >
                <li> Indica</li>
              </Link>
              <Link 
                to={match2 === 'Hybrid'? '/home/' + match + '/filter' + '/' + match3 : '/home/' + match + '/Hybrid' + '/' + match3 }
                className={match2 === 'Hybrid' ? 'side-menu-filters-links active'  : 'side-menu-filters-links' }
                >
                <li> Hybrid</li>
              </Link>
              
              
            </ul>

            <h4>FILTERS</h4>
            <ul className='side-menu-filters'>
              <Link 
                to={match2 === 'High-Potency'? '/home/' + match + '/filter' + '/' + match3 : '/home/' + match + '/High-Potency' + '/' + match3 }
                className={match2 === 'High-Potency' ? 'side-menu-filters-links active'  : 'side-menu-filters-links' }
                >
                <li> High Potency</li>
              </Link>
              <Link 
                to={match2 === 'New-Product'? '/home/' + match + '/filter' + '/' + match3 : '/home/' + match + '/New-Product' + '/' + match3 }
                className={match2 === 'New-Product' ? 'side-menu-filters-links active'  : 'side-menu-filters-links' }
                >
                <li> New Products</li>
              </Link>
              
            </ul>
            <h4>SORT</h4>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className='side-menu-brand'>
                Brand <div><Sort /></div>
              </Dropdown.Toggle>

              <Dropdown.Menu className='side-menu-sort-dropdown'>
                <Dropdown.Item className='side-menu-brand-dropdown' href={'/home/' + match + '/' + match2 +'/' + match3 + '/' + 'Popular'}>Popular</Dropdown.Item>
                <Dropdown.Item className='side-menu-brand-dropdown' href={'/home/' + match + '/' + match2 +'/' + match3 + '/' + 'Potency'}>Potency</Dropdown.Item>
                <Dropdown.Item className='side-menu-brand-dropdown' href={'/home/' + match + '/' + match2 +'/' + match3 + '/' + 'Name'}>Name</Dropdown.Item>
                <Dropdown.Item className='side-menu-brand-dropdown' href={'/home/' + match + '/' + match2 +'/' + match3 + '/' + 'Price-low-to-high'}>Price low to high</Dropdown.Item>
                <Dropdown.Item className='side-menu-brand-dropdown' href={'/home/' + match + '/' + match2 +'/' + match3 + '/' + 'Price-high-low'}>Price high to low</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
        </div>

    </>
  );
}

export default Sidebar;