import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import { productData } from "../data"
import { Link } from 'react-router-dom';

function Cards() {
    return (
        <div className='cards'>
            <div className='cards-title'>
                Flower
            </div>
            <Link 
                to='/cart' 
                className='nav-links' >
                Cart
              </Link>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {productData.map((data) => {
                            return (
                                <CardItem
                                src= {data.src}
                                name= {data.name}
                                brand= {data.brand}
                                sih= {data.sih}
                                percent= {data.percent}
                                path= {data.path}
                                price= {data.price}
                                price7= {data.price7}
                                btns= {data.btns}
                                id= {data.id}
                                />
                            );
                        })}
                        
                                
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
