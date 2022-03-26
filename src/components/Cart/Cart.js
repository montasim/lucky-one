import './Cart.css';

const Cart = ({ item }) => {
    const { img, name, price } = item;

    return (
        <div data-aos="fade-up"
            data-aos-duration="3000" className='d-flex gap-2 align-items-center cart-cart-container mb-3 mx-auto'>
            <img className='cart-image-container' src={img || ''} />
            <p>{name}</p>
            <h6>{price === '' ? '$ ' + price : ' '}</h6>
        </div>
    );
};

export default Cart;