import React from 'react';

function CheckoutItem(props) {
    const quantity = sessionStorage.getItem(props.id);
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return (
        <>
            <li className="Checkout__item">
                    <div className='Checkout__item__info'>
                        <div className="Checkout__item__text">
                            <div className="Checkout__item__brand">{props.brand} </div>
                            <div className="Checkout__item__beside">
                                <div className="Checkout__item__name">{props.name} </div>
                                &nbsp; | &nbsp;
                                <div className='Checkout__item__amount'>
                                    {props.grams}
                                </div>  
                            </div>                
                        </div>
                    </div>
                    <div className='Checkout__item__end'>
                        <div className="Checkout__item__quantity"> {sessionStorage.getItem(props.id)} </div>
                        <div className="Checkout__item__price">${formatter.format(eval(props.price * quantity))} </div> 
                    </div> 
            </li>
        </>
    );
}

export default CheckoutItem
