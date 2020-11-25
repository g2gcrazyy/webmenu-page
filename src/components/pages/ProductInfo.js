import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import InfoItem from '../InfoItem';
import '../Info.css';
import { productData } from "../../data"


function ProductInfo({match}) {

    var result = productData.filter(obj => {
        return obj.id === match.params.productId
    })

    const myvari = productData.find(x => x.id === match.params.productId)

    

    sessionStorage.setItem('variant','3');
    sessionStorage.setItem('ItemQuantity', 1);



    return (
        <>
            <Navbar />
            
            <div className='Info'>
                
                <div className='info-cart'>
                    
                </div>
                <div className="info__container">
                    <InfoItem 
                    src= {myvari.src}
                    src2= {myvari.src2}
                    name= {myvari.name}
                    brand= {myvari.brand}
                    sih= {myvari.sih}
                    thc= {myvari.thc}
                    cbd= {myvari.cbd}
                    path= {myvari.path}
                    price= {myvari.price}
                    price7= {myvari.price7}
                    btns= {myvari.btns}
                    description= {myvari.description}
                    about= {myvari.about}
                    id= {myvari.id}
                    id2= {myvari.id2}
                    />
                </div>
            </div>
            
        </>
    );
}

export default ProductInfo
