import React from 'react'
import './Category.css';
import CategoryItem from './CategoryItem';
import CategoryTypeItem from './CategoryTypeItem.js';
import { productData } from "../data"
import { categoryData } from "../categoryData.js"
import { Link } from 'react-router-dom';

function Category() {
    

    return (
        <div className='category-container'>
            <div className='categories'>
                Categories
                <ul className="category-cards" >
                    {categoryData.map((data) => {
                        return (
                            <CategoryTypeItem
                                type = {data.type}
                                src = {data.src}
                            />
                        );
                    })}
                </ul>
            </div>
            <div className='break'></div>
            <div className='specials'>
                Specials
                <ul className="category-cards" >
                    {productData.map((data) => {
                        return (
                            <CategoryItem
                            src= {data.src}
                            name= {data.name}
                            brand= {data.brand}
                            sih= {data.sih}
                            percent= {data.percent}
                            thc= {data.thc}
                            cbd= {data.cbd}
                            path= {data.path}
                            price= {data.price}
                            price7= {data.price7}
                            btns= {data.btns}
                            id= {data.id}
                            id2= {data.id2}
                            />
                        );
                    })}
                </ul>

            </div>
            <div className='break'></div>
            <div className='specials'>
                Popular Flower
                <ul className="category-cards" >
                    {productData.map((data) => {
                        return (
                            <CategoryItem
                            src= {data.src}
                            name= {data.name}
                            brand= {data.brand}
                            sih= {data.sih}
                            percent= {data.percent}
                            thc= {data.thc}
                            cbd= {data.cbd}
                            path= {data.path}
                            price= {data.price}
                            price7= {data.price7}
                            btns= {data.btns}
                            id= {data.id}
                            id2= {data.id2}
                            />
                        );
                    })}
                </ul>

            </div>
            <div className='break'></div>
            <div className='specials'>
                Popular Vaporizers
                <ul className="category-cards" >
                    {productData.map((data) => {
                        return (
                            <CategoryItem
                            src= {data.src}
                            name= {data.name}
                            brand= {data.brand}
                            sih= {data.sih}
                            percent= {data.percent}
                            thc= {data.thc}
                            cbd= {data.cbd}
                            path= {data.path}
                            price= {data.price}
                            price7= {data.price7}
                            btns= {data.btns}
                            id= {data.id}
                            id2= {data.id2}
                            />
                        );
                    })}
                </ul>

            </div>
            <div className='break'></div>
            <div className='specials'>
                Popular Edibles
                <ul className="category-cards" >
                    {productData.map((data) => {
                        return (
                            <CategoryItem
                            src= {data.src}
                            name= {data.name}
                            brand= {data.brand}
                            sih= {data.sih}
                            percent= {data.percent}
                            thc= {data.thc}
                            cbd= {data.cbd}
                            path= {data.path}
                            price= {data.price}
                            price7= {data.price7}
                            btns= {data.btns}
                            id= {data.id}
                            id2= {data.id2}
                            />
                        );
                    })}
                </ul>

            </div>
            <div className='break'></div>
            <div className='specials'>
                Popular Concentrates
                <ul className="category-cards" >
                    {productData.map((data) => {
                        return (
                            <CategoryItem
                            src= {data.src}
                            name= {data.name}
                            brand= {data.brand}
                            sih= {data.sih}
                            percent= {data.percent}
                            thc= {data.thc}
                            cbd= {data.cbd}
                            path= {data.path}
                            price= {data.price}
                            price7= {data.price7}
                            btns= {data.btns}
                            id= {data.id}
                            id2= {data.id2}
                            />
                        );
                    })}
                </ul>

            </div>
        </div>
    )
}

export default Category
