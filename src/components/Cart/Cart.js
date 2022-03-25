import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = ({ item }) => {
    const { img, name, price } = item;

    console.log('cart', item);

    return (
        <div data-aos="fade-up"
            data-aos-duration="3000" className='d-flex gap-5 align-items-center cart-container p-4 border border-warning mb-3 mx-auto'>
            <img className='w-25' src={img} alt={name + ' image'} />
            <p>{name}</p>
            <h6>${price}</h6>
        </div>
    );
};

export default Cart;