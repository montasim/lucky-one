import React from 'react';

const Gun = ({ data }) => {
    const { action, bullet, capacity, category, id, img, name, price } = data;

    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Gun;