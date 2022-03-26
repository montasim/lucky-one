import React from 'react';
import './Gun.css'

const Gun = ({ data, handleAddToCart, BsFillCartFill }) => {
    const { action, bullet, capacity, category, id, img, name, price } = data;

    return (
        <div data-aos="fade-up"
            data-aos-duration="3000" className='gun-container'>
            <div className='image-container'>
                <img src={img} alt='' />
            </div>
            <div className='p-1'>
                <h3 className='mt-4 my-3'>{name}</h3>
                <p>Bullet Type : {bullet}</p>
                <p>Category : {category}</p>
                <p>Capacity : {capacity}</p>
                <p>Action : {action}</p>
                <div className='add-to-cart p-1'>
                    <button onClick={() => handleAddToCart(data)} className='btn'><BsFillCartFill className='icon me-2' />Add in Cart</button>
                    <h3>${price}</h3>
                </div>
            </div>
        </div >
    );
};

export default Gun;