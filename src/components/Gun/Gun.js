import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Gun = ({ data, addToCart, BsFillCartFill }) => {
    const { action, bullet, capacity, category, id, img, name, price } = data;

    return (
        <div data-aos="fade-up"
            data-aos-duration="3000" className='col-11 col-md-5 col-lg-4 p-2 mx-auto'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='p-5' variant="top" src={img} />
                <Card.Body className='mt-2'>
                    <Card.Title>{name}</Card.Title>
                    <div className='mt-4'>
                        <p>Action: {action}</p>
                        <p>Bullet: {bullet}</p>
                        <p>Capacity: {capacity}</p>
                        <p>Category: {category}</p>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div>
                            <Button onClick={() => addToCart(data)} variant="info text-white">Add to Cart
                                <BsFillCartFill className='ms-2 h4' /></Button>
                        </div>
                        <h3 className='me-1'>${price}</h3>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Gun;