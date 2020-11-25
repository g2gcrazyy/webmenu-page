import React, { useState } from 'react';
import '../../App.css';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Cart from '../Cart';
import CardItem from '../CardItem';
import '../Cards.css';
import { productData } from "../../data"
import ShoppingCart from '../../iconComponents/ShoppingCart';
import { Button } from '../Button';
import { Popover } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));

function Home ({match}) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const title = sessionStorage.getItem('title');

    var result = [];

    {
        match.params.type == null
        ?  sessionStorage.setItem("path", null)
        : sessionStorage.setItem("path", match.params.type)

    }

    {
        match.params.filter == null
        ?  sessionStorage.setItem("filter", "filter")
        : sessionStorage.setItem("filter", match.params.filter)

    }

    {
        match.params.brand == null
        ?  sessionStorage.setItem("brand", "brand")
        : sessionStorage.setItem("brand", match.params.brand)

    }

    {
        title == null
        ?  sessionStorage.setItem("search", "search")
        : sessionStorage.setItem("search", title)

    }

    {
        match.params.sort == null
        ?  sessionStorage.setItem("sort", "sort")
        : sessionStorage.setItem("sort", match.params.sort)

    }

    if (match.params.type === 'All') {
        result = productData;
    }  else {
        result = productData.filter(obj => {
            return obj.type === match.params.type
        })
        
    }

    if (title !== 'search' && (typeof title === 'string')) {
        result = productData.filter(obj => {
            return (obj.name.toLowerCase().includes(title.toLowerCase()) )
            + (obj.sih.toLowerCase().includes(title.toLowerCase()))
            + (obj.brand.toLowerCase().includes(title.toLowerCase()));
        })
        sessionStorage.setItem('title', null);
        
    }

    if (match.params.filter === "Sativa"){
        result = result.filter(obj => {
            return obj.sih === "Sativa";
        })
    } else if (match.params.filter === 'Hybrid') {
        result = result.filter(obj => {
            return obj.sih === 'Hybrid';
        })
    } else if (match.params.filter === 'Indica') {
        result = result.filter(obj => {
            return obj.sih === 'Indica';
        })
    } else if (match.params.filter === "High-CBD") {
        result = result.filter(obj => {
            return obj.cbd > 1;
        })
    } else if (match.params.filter === "High-Potency") {
        result = result.filter(obj => {
            return obj.thc >= 19;
        })
    } else if (match.params.filter === "New-Product") {
        result = result.filter(obj => {
            return obj.new === 'yes';
        })
    } else if (match.params.filter === "filter") {
        result = result;
    } 

    if (sessionStorage.getItem("brand") !== 'brand') {
        result = result.filter(obj => {
            return obj.brand === match.params.brand;
        })
    }

    if (match.params.sort === "Price-low-to-high") {
        result = result.sort((a,b) => a.price - b.price);
    } else if (match.params.sort === "Price-high-low") {
        result = result.sort((a,b) => b.price - a.price);
    } else if (match.params.sort === "Potency") {
        result = result.sort((a,b) => b.thc - a.thc);
    } else if (match.params.sort === "Name") {
        result = result.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 
    } else if (match.params.sort === "Brand") {
        result = result.sort((a,b) => (a.brand > b.brand) ? 1 : ((b.brand > a.brand) ? -1 : 0)); 
    } else  {
        result = result.sort((a,b) => (a.brand > b.brand) ? 1 : ((b.brand > a.brand) ? -1 : 0)); 
    }

    var itemList = [];
    itemList = Object.keys(sessionStorage);
    var result1 = [];
    var result2 =[];

    for (var i=0; i< productData.length; i++){
        for (var y=0; y< itemList.length; y++){
            if(productData[i].id === itemList[y]){
                result1.push(productData[i])
            }
            if(productData[i].id2 === itemList[y]){
                result2.push(productData[i])
            }
        } 
    }

    var total=0;
    var totalItems=0;

    result1.map((data) => {
        total = eval(total + (data.price * sessionStorage.getItem(data.id)));
        totalItems = eval(totalItems + Number(sessionStorage.getItem(data.id)));
    })

    result2.map((data) => {
        total = eval(total + (data.price7 * sessionStorage.getItem(data.id2)));
        totalItems = eval(totalItems + Number(sessionStorage.getItem(data.id2)));
        sessionStorage.setItem('totalItem', totalItems);
    })




    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClickPOP = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Navbar />
            <Sidebar />
            
            <div className='cards'>
                
                <div className='cards-title'>
                    {match.params.type}
                </div>


                <div>
                    <div className='cards-btn' onClick={handleClickPOP}>
                        <Button buttonStyle='btn--cart'
                        buttonSize='btn--medium'>
                            <ShoppingCart />
                            &nbsp; {totalItems}
                        </Button>
                    </div>
                    <Popover
                        className='popover'
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        
                    >
                        <div className='btn--cart--close--pop'>
                            <Button buttonStyle='btn--cart'
                                buttonSize='btn--medium' onClick={handleClose}>
                                Close
                            </Button>
                        </div>
                        
                        <Cart />
                        
                    </Popover>
                </div>
            
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items" onClick={handleClick}>
                        {result.map((data) => {
                            return (
                                <CardItem
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
            </div>
            </>
        );
    }
    
    export default Home;