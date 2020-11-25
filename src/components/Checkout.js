import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './Checkout.css';
import CheckoutItem from './CheckoutItem';
import TechLogo from '../iconComponents/TechLogo';
import { productData } from "../data"
import { Link } from 'react-router-dom';

function Checkout() {  
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
    result.map((data) => {
        total = eval(total + (data.price * sessionStorage.getItem(data.id)));
    })

    
    
    result2.map((data) => {
        total = eval(total + (data.price7 * sessionStorage.getItem(data.id2)));
    })
    return (
        <>
            <div className='checkout-header'>
                <Link 
                    to='/home/All' 
                    className='checkout-header' >
                    Vancouver Main St.
                </Link>
                
            </div>
            <div className='checkout'>
                
                <div className='checkout-left'>
                    <div className='checkout-left-login'>
                        <div className='checkout-left-login-lt'>
                            Checkout
                        </div>
                        <div className='checkout-left-login-rt'>
                            Already have an account? Login
                        </div>
                    </div>
                    <div className='checkout-left-customer'>
                        <div className='checkout-left-customer-text'>
                            Customer
                        </div>
                        <div className='checkout-left-customer-boxes'>
                            <div className='checkout-left-customer-boxes-name'>
                                <form action="/action_page.php">
                                    <input type="fname" id="fname" name="firstname" placeholder="First Name"></input>
                                </form>
                                <form action="/action_page.php">
                                    <input type="lname" id="lname" name="lastname" placeholder="Last Name"></input>
                                </form>
                            </div>
                                <form action="/action_page.php">
                                    <input type="mobile" id="mobile" name="mobile" placeholder="Mobile Phone"></input>
                                </form>
                                <form action="/action_page.php">
                                    <input type="Birthday" id="bday" name="birthday" placeholder="Birthday"></input>
                                </form>
                            <div className='checkout-left-customer-save'>
                                Save my info for next time
                            </div>
                        </div>
                    </div>
                    <div className='checkout-left-type'>
                        <div className='checkout-left-type-text'>
                            Type
                        </div>
                        <div className='checkout-left-type-boxes'>
                            Pickup
                        </div>
                    </div>
                    <div className='checkout-left-payment'>
                        <div className='checkout-left-payment-text'>
                            Payment
                        </div>
                        <div className='checkout-left-payment-box'>
                            <div className='checkout-left-payment-box-text'>
                            Credit Card
                            </div>
                            <div className='checkout-left-payment-box-ID'>
                                You'll be required to show your ID and credit card upon pickup.
                            </div>
                            <div className='checkout-left-payment-box-card-info'>
                                Enter credit card information
                                <form action="/action_page.php">
                                    <input type="card" id="card" name="card" placeholder="Card Number"></input>
                                </form>
                                <div className='checkout-left-payment-box-card-beside'>
                                    <form action="/action_page.php">
                                        <input type="beside1" id="beside1" name="beside1" placeholder="Exp Date"></input>
                                    </form>
                                    <form action="/action_page.php">
                                        <input type="beside2" id="beside2" name="beside2" placeholder="CVV"></input>
                                    </form>
                                </div>
                                <form action="/action_page.php">
                                    <input type="postal" id="postal" name="postal" placeholder="Zip/Postal Code"></input>
                                </form>
                                <div className='checkout-left-payment-box-card-save-btn'>
                                    <Button 
                                        buttonStyle='btn--info-add' 
                                        buttonSize='btn--large2--info'
                                    >
                                        <div className='checkout-right-btn-text'>
                                            SAVE
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='checkout-left-subscribe'>
                        <div className='checkout-left-subscribe-text'>
                            Subscribe
                        </div>
                        <div className='checkout-left-subscribe-boxes'>
                            Subscribe to promotional emails from this dispensary
                        </div>
                    </div>
                    <div className='checkout-left-summary'>
                        <div className='checkout-left-summary-text'>
                            Summary
                        </div>
                        <div className='checkout-left-summary-items'>
                            {result.map((data) => { 
                                return (
                                    <CheckoutItem 
                                        name= {data.name}
                                        brand= {data.brand}
                                        price= {data.price}  
                                        id = {data.id}
                                        grams = '3.5g'
                                    />
                                );
                            })}
                            {result2.map((data) => {
                                return (
                                    <CheckoutItem 
                                        name= {data.name}
                                        brand= {data.brand}
                                        price= {data.price7}
                                        id = {data.id2}
                                        grams = '7g'
                                    />
                                );
                            })} 
                        </div>
                    </div>
                </div>
                <div className='checkout-right'>
                    <div className='checkout-right-store'>
                        <figure className="checkout-right-store-pic-wrap">
                            <TechLogo />
                        </figure>
                        <div className='checkout-right-store-text'>
                            <div className='checkout-right-store-text-name'>
                                152 Tech - Main St
                            </div>
                            <div className='checkout-right-store-text-pickup'>
                                Est. pickup | 10 - 20 min
                            </div>
                        </div>
                    </div>
                    <div className='checkout-right-subtotal'>
                        <div className='checkout-right-subtotal-1'>
                            <div className='checkout-right-subtotal-1-text'>
                                Subtotal:
                            </div>
                            <div className='checkout-right-subtotal-1-price'>
                                ${formatter.format(total)}
                            </div>
                        </div>
                        <div className='checkout-right-subtotal-2'>
                            <div className='checkout-right-subtotal-2-text'>
                                Taxes:
                            </div>
                            <div className='checkout-right-subtotal-1-price'>
                                ${formatter.format(eval(total * 0.12))}
                            </div>
                        </div>
                        <div className='checkout-right-subtotal-promo'>
                            Add a promo code
                        </div>
                    </div>
                    <div className='checkout-right-total'>
                        <div className='checkout-right-subtotal-2-text'>
                            ORDER TOTAL:
                        </div>
                        <div className='checkout-right-subtotal-2-price'>
                            ${formatter.format((eval(total * 1.12))) }
                        </div>
                    </div>
                    <div className='checkout-right-btn'>
                            <Button 
                                buttonStyle='btn--order' 
                                buttonSize='btn--large2--info'
                            >
                                <div className='checkout-right-btn-text'>
                                    PLACE ORDER
                                </div>
                            </Button>
                    </div>
                    <div className='checkout-right-terms'>
                        By placing an order you agree to our Terms and to receive 
                        automated text message updates.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout