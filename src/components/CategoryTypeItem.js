import React from 'react'
import { Link } from 'react-router-dom';

function CategoryTypeItem(props) {
    return (
        <Link className='category-type-container' to={'/home/' + props.type}>
            <div className='category-type-shop'>
                Shop
            </div>
            <div className='category-type-type'>
                {props.type}
            </div>
            <figure className="category-type-pic-wrap">
                <img src={props.src} alt="Image" 
                className="category-type-img"/>
            </figure>
            
        </Link>
    )
}

export default CategoryTypeItem
