const Cart = ({ item }) => {
    // destructuring
    const { img, name, price } = item;

    return (
        <div data-aos="fade-up"
            data-aos-duration="3000" className='d-flex gap-2 align-items-center mb-3 mx-auto'>
            <img className='w-50 rounded-3' src={img || ''} />
            <p>{name}</p>
            <h6>{price}</h6>
        </div>
    );
};

export default Cart;