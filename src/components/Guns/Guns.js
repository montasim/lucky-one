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

    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        if (cart.length < 4) {
            const exists = cart.find(product => product.id === selectedProduct.id);
            if (!exists) {
                selectedProduct.quantity = 1;
                newCart = [...cart, selectedProduct];
            }
            else {
                const rest = cart.filter(product => product.id !== selectedProduct.id);
                exists.quantity = exists.quantity + 1;
                newCart = [...rest, exists];
            }
        }
        else if (cart.length) {
            alert('Can Not Add More Than 4 Items At A Time');
        }

        setCart(newCart);
    }

    const choose = max => {
        if (cart.length === 4) {
            const rndInt = Math.floor(Math.random() * max) + 0;

            // console.log(cart);
            // console.log(rndInt);
            console.log('random', cart[rndInt]);

            <Cart item={cart.rndInt}></Cart>
        }
    }

    const clearCart = _ => {
        cart.length = 0;

        Cart.innerHtml = '';

        setCart(cart);
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
                        guns.map(gun => <Gun key={gun.id} data={gun} handleAddToCart={handleAddToCart} BsFillCartFill={BsFillCartFill}></Gun>)
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
                    <button onClick={() => choose(3)} className='btn btn-light text-info border px-5 py-1 text-uppercase' variant="light">Choose 1 For Me</button>
                    <button onClick={() => clearCart(cart)} className='btn btn-light text-success border px-5 py-1 text-uppercase mt-3' variant="light">Remove All</button>
                </div>
            </div>
        </div>
    );
};

export default Guns;