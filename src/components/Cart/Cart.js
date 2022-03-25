import React from 'react';
import './Cart.css';

const Cart = ({ item }) => {
    console.log(item.name)

    const { img, name, price } = item;

    return (
        <div className='d-flex gap-5 align-items-center cart-container p-4 border border-warning mb-3'>
            <img className='w-25' src={img} alt={name + ' image'} />
            <p>{name}</p>
            <h6>${price}</h6>
        </div>
    );
};

export default Cart;