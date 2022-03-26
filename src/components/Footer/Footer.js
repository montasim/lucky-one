import React from 'react';
import './Footer.css';

const Footer = ({ AiOutlineCopyrightCircle }) => {
    return (
        <div className='nav align-items-center justify-content-center footer-container mt-5 p-3'>
            <p className='text-white mt-2'>Modern Gun Shop<AiOutlineCopyrightCircle className='ms-2 me-2 p' />Copyright 2025</p>
        </div>
    );
};

export default Footer;