import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Gun from '../Gun/Gun';

const Guns = ({ BsFillCartFill }) => {
    const [guns, setGuns] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setGuns(data))
    }, [cart])

    const addToCart = (data) => {
        const newCart = [...cart, data]
        if (cart.length < 4 && newCart.length < 5) {
            setCart(newCart);
        }

        console.log(cart);
        console.log(newCart);
    }

    const choose = limit => {

    }

    const clearCart = array => {
        while (array.length) {
            array.pop();
        }

        setCart(array);
    };

    return (
        <div className='my-5 row mx-auto px-5'>
            <div className='text-center mb-5'>
                <h1 className='text-info'>Gun of Your Dreams </h1>
                <h4 className='mt-3s'>Choose Your 4 Favourite Gun From Our Large Collection</h4>
            </div>
            <div className='container col-lg-9 col-11 gap-3 mx-auto'>
                <div className='row'>
                    {
                        guns.map(gun => <Gun key={gun.id} data={gun} addToCart={addToCart} BsFillCartFill={BsFillCartFill}></Gun>)
                    }
                </div>
            </div>
            <div className='col-lg-3 col-12 border border-info text-center p-4 mt-3'>
                <h2>Selected Guns</h2>
                <h1 className='mb-4'>{cart.length}</h1>
                <div>
                    {
                        cart.map(item => <Cart item={item}></Cart>)
                    }
                </div>
                <div className='mt-5'>
                    <button onClick={() => choose(4)} className='btn btn-light text-info border px-5 py-1 text-uppercase' variant="light">Choose 1 For Me</button>
                    <button onClick={() => clearCart(cart)} className='btn btn-light text-success border px-5 py-1 text-uppercase mt-3' variant="light">Choose Again</button>
                </div>
            </div>
        </div>
    );
};

export default Guns;