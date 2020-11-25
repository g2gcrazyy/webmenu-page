import React, { useState } from 'react';
import { productData } from "./../data"
import ShoppingCart from './../iconComponents/ShoppingCart';
import { Button } from './Button';
import { Popover } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Cart from './Cart';
import './Cards.css';

const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));

function PopoverCart() {


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
    )
}

export default PopoverCart
