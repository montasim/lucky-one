import './Guns.css';
import Cart from '../Cart/Cart';
import Gun from '../Gun/Gun';
import React, { useEffect, useState } from 'react';

const Guns = ({ BsFillCartFill, AiOutlineSelect, GoDiffRemoved, AiFillShopping, GiAutogun }) => {
    // guns data state
    const [guns, setGuns] = useState([]);

    // cart data state
    const [cart, setCart] = useState([]);

    // when data loaded
    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setGuns(data))
    }, [cart])

    // add to cart
    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        if (cart.length < 4) {
            // add unique item to cart
            const exists = cart.find(product => product.id === selectedProduct.id);
            if (!exists) {
                newCart = [...cart, selectedProduct];
                setCart(newCart);
            }
            // for existing items
            else {
                const rest = cart.filter(product => product.id !== selectedProduct.id);
                newCart = [...rest, exists];
                setCart(newCart);

                alert('Can Not Select Duplicate Items');
            }
        }
        // can select maximum 4 items 
        else if (cart.length === 4) {
            alert('Can Select Maximum 4 Items');
        }

        // change cart state
        setCart(newCart);
    }

    // choose from selected 4 items
    const choose = _ => {
        if (cart.length === 4) {
            const rndInt = Math.floor(Math.random() * 3) + 0;

            let cartItems = [];

            cart.map(i => cartItems.push(i.id));

            let forDeletion = cartItems.filter(a => a !== cart[rndInt].id);

            const currentCartItems = cartItems.filter(item => !forDeletion.includes(item));

            setCart(guns[currentCartItems[0]]);
        }
        // when less than 4 items display message
        else {
            alert('Please Choose Any 4 Items First');
        }
    }

    // clear cart items
    const clearCart = _ => {
        if (cart.length !== 0) {
            setCart(cart.length = 0);
        }
        else {
            alert('Select Items First !');
        }
    };

    return (
        <div data-aos="fade-up"
            data-aos-duration="3000" className='row mx-auto px-5 guns-container'>
            <div className='text-center mb-5'>
                <h1 className='my-5 text-center'><GiAutogun className='h1 me-3' />Guns of Your Dream </h1>
                <h4 className='mt-3 mb-5'>Choose Your 4 Favorite Gun From Our Large Collection</h4>
            </div>
            <div className='col-lg-3 col-12 order-lg-1 text-center p-4 mb-4 mt-2 cart-container'>
                <h3><AiFillShopping className='h3 me-3' />Items In Cart</h3>
                <h1 className='mb-5'>{cart.length}</h1>
                {   // display cart items
                    cart.length > 0 ? cart.map(item => <Cart key={item.id} item={item}></Cart>) : <Cart key={cart.id} item={cart}></Cart>
                }
                <div className='mt-5 row order-lg-2 gap-3 align-items-center justify-content-center'>
                    <button onClick={() => choose(3)} className=' text-uppercase border-0'><AiOutlineSelect className='me-2 h5 mt-2' />Suggest Gun</button>
                    <button onClick={() => clearCart(cart)} className='text-uppercase border-0'><GoDiffRemoved className='me-2 h5 mt-1' />Empty Cart</button>
                </div>
            </div>
            <div className='guns-container col-lg-9 col-12'>
                <div className='row gap-4'>
                    {
                        // display items
                        guns.map(gun => <Gun handleAddToCart={handleAddToCart} key={gun.id} data={gun} BsFillCartFill={BsFillCartFill}></Gun>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Guns;