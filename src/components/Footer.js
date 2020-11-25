import React from 'react'
import './Footer.css';
import TechLogo from '../iconComponents/TechLogo';


function Footer() {
    return (
        <>
        <div className='footer'>
        Powered by &nbsp;
            <div className='footer-logo'>
                <TechLogo />
            </div>
        </div>     
        </>
    );
}

export default Footer
