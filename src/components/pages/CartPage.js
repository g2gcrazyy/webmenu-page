import React from 'react';
import '../../App.css';
import Cart from '../Cart';
import Cards from '../Cards';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';


function CartPage() {
    return (
        <>
            <Cart />
            <Navbar />
            <Sidebar />
            <Cards />
            
        </>
    );
}

export default CartPage;
