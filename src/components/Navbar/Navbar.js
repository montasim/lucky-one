import React from 'react';
import './Navbar.css';

const Navbar = ({ cart, GiMachineGunMagazine, AiFillHome, FaUserAlt, BsFillCartFill, AiFillShopping, openModal }) => {
    return (
        <div className='navbar d-flex justify-content-between align-items-center px-5'>
            <h2 className='store-name text-uppercase'><GiMachineGunMagazine className='me-3' />Modern Gun Shop</h2>
            <div className='d-flex h5 align-items-center'>
                <a className='text-decoration-none nav-hover' href=""><AiFillHome className='me-2' />Home</a>
                <a className='text-decoration-none ms-3 nav-hover' href=""><AiFillShopping className='me-2' />Shop</a>
                <button onClick={openModal} className='ms-3 nav-hover' href=""><BsFillCartFill className='me-2' />Cart <sup className='text-info'>{cart}</sup></button>
                <a className='text-decoration-none ms-3 nav-hover' href=""><FaUserAlt className='me-2' />Login</a>
            </div>
        </div>
    );
};

export default Navbar;