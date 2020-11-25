import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import Waves from '../iconComponents/Waves';
import Plus from '../iconComponents/Plus';

function CardItem(props) {

    const [click, setClick] = useState(false);
    const [click2, setClick2] = useState(false);
    var mybutton = false;
    var itemList = [];

    const handleClick = () => {
        itemList.push(props.id);
        var storageItem = sessionStorage.getItem(itemList);
        if(storageItem === null){
            sessionStorage.setItem(itemList, 1);
        } else {
            var quantity = eval(Number(storageItem) + 1);
            sessionStorage.setItem(itemList, quantity);
        }
        setClick(!click);
    };

    const handleClick2 = () => {
        itemList.push(props.id2);
        var storageItem = sessionStorage.getItem(itemList);
        if(storageItem === null){
            sessionStorage.setItem(itemList, 1);
            
        } else{
            var quantity = eval(Number(storageItem) + 1);
            sessionStorage.setItem(itemList, quantity);
        }
        setClick2(!click2);
    };

    if (props.btns == "2") {
        mybutton = true;
    } else {
        mybutton = false;
    }

    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={"/product/" + props.id}>
                    <figure className="cards__item__pic-wrap" data-catagory={props.label}>
                        <img src={props.src} alt="Image" 
                        className="cards__item__img"/>
                    </figure>
                    <div className='cards__item__info'>
                        <div className="cards__item__text">
                            <div className="cards__item__brand">
                                <div className="cards__item__brand__text">{props.brand} </div>
                            </div>
                            <div className="cards__item__name">
                                <div className="cards__item__name__text">{props.name} </div>
                            </div>
                            <div className="cards__item__bot__text">
                                <div className="cards__item__SIH">
                                    <div className="cards__item__SIH__icon">
                                        <Waves />
                                    </div>
                                    &nbsp;
                                    <div className="cards__item__SIH__text">{props.sih} </div>
                                </div>
                                <div className="cards__item__percent">
                                    <h5 className="cards__item__percent__text">
                                        THC: &nbsp;{props.thc}% &nbsp;|&nbsp; CBD: &nbsp;{props.cbd}%
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="cards__item__buttons" >
                    <div className="cards__item__btn2"  onClick={handleClick2}>
                        {mybutton && 
                        <Button 
                            buttonStyle='btn--add' 
                            buttonSize='btn--small'
                        >
                            7g - &nbsp;
                            <strong>${props.price7}</strong>
                            <div className='card-item-plus-2'>
                                <Plus />
                            </div>
                        </Button>
                        }
                    </div>
                    <div className='card__item__btn1' onClick={handleClick}>
                        {mybutton &&
                            <Button 
                                buttonStyle='btn--add' 
                                buttonSize='btn--small'
                            >
                                3.5g - &nbsp;
                                <strong>${props.price}</strong>
                                <div className='card-item-plus-1'>
                                    <Plus />
                                </div>
                            </Button>
                        }
                        {!mybutton &&
                            <Button 
                                buttonStyle='btn--add' 
                                buttonSize='btn--large'
                            >
                                3.5g - &nbsp;
                                <strong>${props.price}</strong>
                                <div className='card-item-plus'>
                                    <Plus />
                                </div>
                            </Button>
                        }
                    </div>
                </div>
            </li>
        </>
    );
}

export default CardItem
