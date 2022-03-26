import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Gun from '../Gun/Gun';

const Guns = ({ BsFillCartFill, FcViewDetails }) => {
    const [guns, setGuns] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setGuns(data))
    }, [cart])

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        if (cart.length < 4) {
            const exists = cart.find(product => product.id === selectedProduct.id);
            if (!exists) {
                newCart = [...cart, selectedProduct];
            }
            else {
                const rest = cart.filter(product => product.id !== selectedProduct.id);
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

            let cartItems = [];

            cart.map(i => cartItems.push(i.id));

            let forDeletion = cartItems.filter(a => a != cart[rndInt].id);

            const currentCartItems = cartItems.filter(item => !forDeletion.includes(item));

            setCart(guns[currentCartItems[0]]);
        }
    }

    const clearCart = _ => {
        cart.length = 0;

        setCart(cart);
    };

    return (
        <div className='my-5 row mx-auto px-5'>
            <div className='text-center mb-5'>
                <h1 className='text-info'>Gun of Your Dreams </h1>
                <h4 className='mt-3s'>Choose Your 4 Favourite Gun From Our Large Collection</h4>
            </div>
            <div className='col-lg-3 col-12 order-lg-1 border border-info text-center p-4 mb-4 mt-2'>
                <h2>Selected Guns</h2>
                <h1 className='mb-4'>{cart.length}</h1>
                <div>
                    {
                        cart.length > 0 ? cart.map(item => <Cart key={item.id} item={item || ''}></Cart>) : <Cart key={cart.id} item={cart || ''}></Cart>
                    }
                </div>
                <div className='mt-5 row order-lg-2 gap-3'>
                    <button onClick={() => choose(3)} className='btn btn-light text-info border px-5 py-1 text-uppercase' variant="light">Choose 1 For Me</button>
                    <button onClick={() => clearCart(cart)} className='tn btn-light text-info border px-5 py-1 text-uppercase' variant="light">Remove All</button>
                </div>
            </div>

            <div className='container col-lg-9 col-12 gap-3 mx-auto'>
                <div className='row'>
                    {
                        guns.map(gun => <Gun key={gun.id} data={gun} handleAddToCart={handleAddToCart} BsFillCartFill={BsFillCartFill} FcViewDetails={FcViewDetails}></Gun>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Guns;