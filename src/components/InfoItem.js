import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import Sort from '../iconComponents/Sort';
import ShoppingCart from '../iconComponents/ShoppingCart';
import Dropdown from 'react-bootstrap/Dropdown'
import PopoverCart from './PopoverCart';


function InfoItem(props) {
    const [click, setClick] = useState(false);



    
    const closeMobileMenu = () => setClick(false);
    var mybutton = false;

    if (props.btns == "2") {
        mybutton = true;
    } else {
        mybutton = false;
    }

    var itemList = [];
    var variant = '3';



    const handleClick2 = () => {
        if (sessionStorage.getItem('variant') === '7'){
            itemList.push(props.id2);
        } else {
            itemList.push(props.id);
        }
        
        var storageItem = sessionStorage.getItem(itemList);




        if(storageItem === null){
            sessionStorage.setItem(itemList, Number(sessionStorage.getItem('ItemQuantity')));

        } else {
            var quantity = eval(Number(storageItem) + Number(sessionStorage.getItem('ItemQuantity')));
            sessionStorage.setItem(itemList, quantity);

        }
        setClick(!click);
    };
/*
    const handleClick = () => {
        itemList.push(props.id);
        var storageItem = sessionStorage.getItem(itemList);
        sessionStorage.removeItem(props.id);
        setClick(!click);
    };*/

    const handleClickQuantity = num => () => {
        sessionStorage.setItem('ItemQuantity', num);
        setClick(!click);
    };

    const handleClick3 = () => {
        variant = '3';
        sessionStorage.setItem('variant','3');
        setClick(!click);
    };
    const handleClick7 = () => {
        variant = '7';
        sessionStorage.setItem('variant','7');
        setClick(!click);
    };

    return (
        <>
            <PopoverCart />
            <li className="info__item">
                <div className="info__item__link" >
                    <figure className="info__item__pic-wrap" data-catagory={props.label}>
                        <img src={props.src} alt="Product Image" 
                        className="info__item__img"/>
                    </figure>
                    <div className='info__item__info'>
                        <div className="info__item__text">
                            <div className="info__item__brand">
                                <div className="info__item__brand__text">{props.brand} </div>
                            </div>
                            <div className="info__item__name">
                                <div className="info__item__name__text">{props.name} </div>                             
                            </div>
                        </div>
                        <div className="info__item__buttons">
                            <div onClick={handleClick7}>
                                {mybutton && 
                                    <div className={ sessionStorage.getItem('variant') === '7' ? 'info__item__btn7 active' : 'info__item__btn7' } >
                                        7g <br></br>
                                        <strong>{props.price7}</strong>
                                    </div>
                                }
                            </div>
                            <div onClick={handleClick3}>
                                {mybutton &&
                                    <div className={ sessionStorage.getItem('variant') === '3' ? 'info__item__btn3 active' : 'info__item__btn3' } >
                                        3.5g <br></br>
                                        <strong>{props.price}</strong>
                                    </div>
                                }
                                {!mybutton &&
                                    <div className={sessionStorage.getItem('variant') === '3' ? 'info__item__btn__large active' : 'info__item__btn__large' }>
                                        <p>
                                        3.5g &nbsp; - &nbsp;
                                        <strong>${props.price}</strong></p>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='info__item__quantity' >
                            <Dropdown>
                                <Dropdown.Toggle  className='info__item__quantity__toggle'>
                                <Button 
                                buttonStyle='btn--outline' 
                                buttonSize='btn--large--info'
                            >
                                {sessionStorage.getItem('ItemQuantity')} &nbsp; &nbsp;
                                <Sort />
                            </Button>
                            </Dropdown.Toggle>

                                <Dropdown.Menu className='info__item__quantity-dropdown-menu'>
                                <Dropdown.Item className='info__item__quantity-dropdown' onClick={handleClickQuantity(1)} >1</Dropdown.Item>
                                    <Dropdown.Item className='info__item__quantity-dropdown' onClick={handleClickQuantity(2)}>2</Dropdown.Item>
                                    <Dropdown.Item className='info__item__quantity-dropdown' onClick={handleClickQuantity(3)}>3</Dropdown.Item>
                                    <Dropdown.Item className='info__item__quantity-dropdown' onClick={handleClickQuantity(4)}>4</Dropdown.Item>
                                    <Dropdown.Item className='info__item__quantity-dropdown' onClick={handleClickQuantity(5)}>5</Dropdown.Item>
                                    <Dropdown.Item className='info__item__quantity-dropdown' onClick={handleClickQuantity(6)}>6</Dropdown.Item>
                                    <Dropdown.Item className='info__item__quantity-dropdown' onClick={handleClickQuantity(7)}>7</Dropdown.Item>
                                    <Dropdown.Item className='info__item__quantity-dropdown' onClick={handleClickQuantity(8)}>8</Dropdown.Item>
                                    <Dropdown.Item className='info__item__quantity-dropdown' onClick={handleClickQuantity(9)}>9</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            &nbsp; &nbsp;
                            <div className='info__item__quantity__cart' onClick={handleClick2}>
                                
                                <Button 
                                    buttonStyle='btn--info-add' 
                                    buttonSize='btn--large'
                                >
                                    <div className='info__item__cart'>
                                    <ShoppingCart /> 
                                    </div>
                                    <div className='info__item__cart__text'>
                                        &nbsp; &nbsp; ADD TO CART
                                    </div>
                                </Button>
                            </div>                    
                        </div>
                        <div className="info__item__bot__text">
                            <div className="info__item__SIH">
                                <div className="info__item__SIH__text">{props.sih} </div>
                            </div>
                            <div className="info__item__percent">
                                <div className="info__item__percent__thc">
                                    THC:&nbsp;
                                    {props.thc}%
                                </div>
                                <div className="info__item__percent__cbd">
                                    CBD:&nbsp;
                                    {props.cbd}%
                                </div>
                            </div>
                        </div>
                        <div className="info__item__description">{props.description}</div>
                        <div className="info__item__about">
                            <div className="info__item__about__title">
                                About the Brand
                            </div>
                            <figure className="info__item__pic2-wrap" data-catagory={props.label}>
                                <img src={props.src2} alt="Brand Image" 
                                className="info__item__img2"/>
                            </figure>
                            {props.about}
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
}

export default InfoItem
