import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import './Cart.css';
import Cart from './Cart';


const STYLES = ['btn--primary', 'btn--outline', 'btn--test', 'btn--add', 'btn--cart', 'btn--info-add', 'btn--order', 'btn--checkout'];

const SIZES = ['btn--medium', 'btn--large', 'btn--small', 'btn--small-info', 'btn--large--info', 'btn--large2--info', 'btn--cart--size'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize 
    : SIZES[0];
    
  if(buttonStyle == 'btn--cart'){

    return (
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>

    );
  }

  if(buttonStyle == 'btn--checkout'){

    return (
      <Link to='/checkout' className='btn-mobile'>
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </Link>
    );
  }

  if(buttonStyle == 'btn--add'){

    return (
      <div className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
        
      </button>
    </div>
    );
  }

  return (
    <div className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </ div>
  );
};