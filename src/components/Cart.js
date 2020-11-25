import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './Cart.css';
import CartItem from './CartItem';
import TechLogo from '../iconComponents/TechLogo';
import { productData } from "../data"
import ShoppingCart from '../iconComponents/ShoppingCart';
import { useHistory } from 'react-router-dom'

const useForceUpdate = () => useState()[1];

function Cart() {   
    const forceUpdate = useForceUpdate();
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    let history = useHistory();
    
    var itemList = [];
    itemList = Object.keys(sessionStorage)
    var result = [];
    var result2 =[];

    for (var i=0; i< productData.length; i++){
        for (var y=0; y< itemList.length; y++){
            if(productData[i].id === itemList[y]){
                result.push(productData[i])
            }
            if(productData[i].id2 === itemList[y]){
                result2.push(productData[i])
            }
        } 
    }

    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    var total=0;
    var totalItems=0;

    
    result.map((data) => {
        total = eval(total + (data.price * sessionStorage.getItem(data.id)));
        totalItems = eval(totalItems + Number(sessionStorage.getItem(data.id)));
    })

    result2.map((data) => {
        total = eval(total + (data.price7 * sessionStorage.getItem(data.id2)));
        totalItems = eval(totalItems + Number(sessionStorage.getItem(data.id2)));
    })

    return (
        <>
        <div className='cart-display' onClick={handleClick}>
            <div className={click ? 'cart-display-btn active' : 'cart-display-btn'}>
            <Button buttonStyle='btn--cart'>
              <ShoppingCart />
              &nbsp; {totalItems}
            </Button>
            </div>

        </div>

        <div className='background-fade'>

        </div>

        <div className={click ? 'cart active' : 'cart'}>
            <div className='cart-items' >
                <div className='cart-items-topbar'>
                    <div className='cart-items-topbar-left'>
                        <div className='cart-items-topbar-left-text'>
                            Shopping Cart
                            
                        </div>
                        <div className='cart-items-topbar-left-subtotal'>
                            Subtotal: ${formatter.format(total)}
                        </div>
                        <div className={click ? 'cart-display-close active' : 'cart-display-close'}>
                            <Button buttonStyle='btn--cart' onClick={() => history.goBack()}>
                                Close
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='cart-items-store'>
                    <div className='cart-items-store-logo'>
                        <TechLogo />
                    </div>
                    <div className='cart-items-store-text'>
                        <div className='cart-items-store-shopping-at'>
                            SHOPPING AT:
                        </div>
                        <div className='cart-items-store-name'>
                            152 - Main St
                        </div>
                    </div>
                    <div className='cart-items-store-pickup'>
                        Pickup
                    </div>   
                </div>
                <div className='cart-items-products' onClick={handleClick}>

                    {result.map((data) => {
                        return (
                            <CartItem
                                src= {data.src}
                                name= {data.name}
                                brand= {data.brand}
                                sih= {data.sih}
                                percent= {data.percent}
                                path= {data.path}
                                price= {data.price}
                                price7= {data.price7}
                                btns= {data.btns}
                                grams = '3.5g'
                                id = {data.id}
                            />
                        );
                    })}
                    {result2.map((data) => {
                            return (
                                <CartItem
                                    result= {result2}
                                    src= {data.src}
                                    name= {data.name}
                                    brand= {data.brand}
                                    sih= {data.sih}
                                    percent= {data.percent}
                                    path= {data.path}
                                    price= {data.price7}
                                    btns= {data.btns}
                                    grams = '7g'
                                    id = {data.id2}
                                />
                            );
                        })} 
                </div>
                <div className='cart-items-bottom-bar'>
                    <div>
                    <Button 
                        buttonStyle='btn--checkout' 
                        buttonSize='btn--large2--info'
                    >
                        
                        <div className='info__item__cart__text'>
                            PROCEED TO CHECKOUT
                        </div>
                    </Button>
                    </div>
                    <div className={click ? 'cart-items-bottom-bar-right active' : 'cart-items-bottom-bar-right'}>
                        <div className='cart-items-bottom-bar-right-sub'>
                            Subtotal: ${formatter.format(total)}
                        </div>
                        <div className='cart-items-bottom-bar-right-warn'>
                            *Sales tax will added at checkout
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


export default Cart
