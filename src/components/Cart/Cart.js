import './Cart.css';

const Cart = ({ item }) => {
    const { img, name, price } = item;

    return (
        <div data-aos="fade-up"
            data-aos-duration="3000" className='d-flex gap-5 align-items-center cart-container p-4 mb-3 mx-auto'>
            <img className='w-25' src={img || ''} />
            <p id='select-text'>{name}</p>
            <h6>{price === '' ? '$ ' + price : ' '}</h6>
        </div>
    );
};

export default Cart;