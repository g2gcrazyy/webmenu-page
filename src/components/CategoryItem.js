import React from 'react'
import { Link } from 'react-router-dom';

function CategoryItem(props) {
    return (
        <Link className='category-item-container' to={"/product/" + props.id}>
            <figure className="category-item-pic-wrap">
                <img src={props.src} alt="Image" 
                className="category-item-img"/>
            </figure>
            <div className='category-item-price'>
                ${props.price}

            </div>
            <div className='category-item-name'>
                {props.name}

            </div>
            <div className='category-item-brand'>
                {props.brand}

            </div>
            <div className='category-item-bottom'>
                {props.sih} &nbsp; THC:{props.thc}% &nbsp; CBD:{props.cbd}%

            </div>
            
        </Link>
    )
}

export default CategoryItem
