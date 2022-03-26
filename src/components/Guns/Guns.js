import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Gun from '../Gun/Gun';
import './Guns.css'

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
                setCart(newCart);
            }
            else {
                const rest = cart.filter(product => product.id !== selectedProduct.id);
                newCart = [...rest, exists];
                setCart(newCart);
            }
        }
        else if (cart.length) {
            alert('Can Not Add More Than 4 Items At A Time');
        }

        setCart(newCart);
    }

    const choose = _ => {
        if (cart.length === 4) {
            const rndInt = Math.floor(Math.random() * 3) + 0;

            let cartItems = [];

            cart.map(i => cartItems.push(i.id));

            let forDeletion = cartItems.filter(a => a != cart[rndInt].id);

            const currentCartItems = cartItems.filter(item => !forDeletion.includes(item));

            setCart(guns[currentCartItems[0]]);
        }
    }

    const clearCart = _ => {
        setCart(cart.length = 0);
    };

    return (
        <div className='row mx-auto my-5  px-5 guns-container'>
            <div className='text-center mb-5'>
                <h1 className='my-5 text-center'>Guns of Your Dream </h1>
                <h4 className='mt-3'>Choose Your 4 Favourite Gun From Our Large Collection</h4>
            </div>
            <div className='col-lg-3 col-12 order-lg-1 text-center p-4 mb-4 mt-2 cart-container'>
                <h2>Selected Guns</h2>
                <h1 className='mb-4'>{cart.length}</h1>
                <div>
                    {
                        cart.length > 0 ? cart.map(item => <Cart key={item.id} item={item}></Cart>) : <Cart key={cart.id} item={cart}></Cart>
                    }
                </div>
                <div className='mt-5 row order-lg-2 gap-3 align-items-center justify-content-center'>
                    <button onClick={() => choose(3)} className=' text-uppercase border-0'>Choose 1 For Me</button>
                    <button onClick={() => clearCart(cart)} className='text-uppercase border-0'>Remove All</button>
                </div>
            </div>
            <div className='guns-container col-lg-9 col-12'>
                <div className='row gap-4'>
                    {
                        guns.map(gun => <Gun handleAddToCart={handleAddToCart} key={gun.id} data={gun} BsFillCartFill={BsFillCartFill}></Gun>)
                    }
                </div>
            </div>
        </div>


    );
};

export default Guns;