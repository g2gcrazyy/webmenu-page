import React, { useState } from 'react';
import Sort from '../iconComponents/Sort';
import CardItem from './CardItem';
import Cart from './Cart';
import Home from './pages/Home';
import ReactDOM from 'react-dom';



function CartItem(props) {
    const quantity = sessionStorage.getItem(props.id);
    
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    const [click, setClick] = useState(false);
    var itemList = [];

    const handleClick = () => {
        itemList.push(props.id);
        var storageItem = sessionStorage.getItem(itemList);
        sessionStorage.removeItem(props.id);
        setClick(!click);
    };
    

    return (
        <>

            <li className="cart__item">
                    <figure className="cart__item__pic-wrap" data-catagory={props.label}>
                        <img src={props.src} alt="Image" 
                        className="cart__item__img"/>
                    </figure>
                    <div className='cart__item__info'>
                        <div className="cart__item__text">
                            <div className="cart__item__name">{props.name} </div>
                            <div className="cart__item__brand">{props.brand} </div>
                            <div className='cart__item__amount'>
                                {props.grams}  &nbsp;   | &nbsp; 
                                <div className='cart__item__amount__remove' onClick={handleClick}>
                                    Remove
                                    
                                </div>
                            </div>                     
                        </div>
                    </div>
                    <div className="cart__item__quantity"> {quantity} </div>
                    <div className="cart__item__price">${formatter.format(eval(props.price * quantity))} </div> 
            </li>
        </>
    );
}

export default CartItem
