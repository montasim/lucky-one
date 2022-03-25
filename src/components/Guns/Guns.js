import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';

const Guns = () => {
    const [guns, setGuns] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setGuns(data))
    }, [])

    const [cart, setCart] = useState([]);

    const addToCart = (data) => {
        const newCart = [...cart, data]
        setCart(newCart);

        console.log(data);
    }

    return (
        <div className='my-5 row mx-auto px-5'>
            <div className='text-center mb-5'>
                <h1 className='text-info'>Gun of Your Dreams </h1>
                <h4 className='mt-3s'>Choose Your 4 Favourite Gun From Our Large Collection</h4>
            </div>
            <div className='container col-lg-9 col-11 gap-3 mx-auto'>
                <div className='row'>
                    {
                        guns.map(gun => <Gun key={gun.id} data={gun} addToCart={addToCart}></Gun>)
                    }
                </div>
            </div>
            <div className='col-lg-3 col-11 border border-info text-center p-4'>
                <h2>Selected Guns</h2>
                <h1>{cart.length}</h1>
                <div className='mt-5'>
                    <button className='btn btn-light text-info border px-5 py-1 text-uppercase' variant="light">Choose 1 For Me</button>
                    <button className='btn btn-light text-success border px-5 py-1 text-uppercase mt-3' variant="light">Choose Again</button>
                </div>
            </div>
        </div>
    );
};

export default Guns;