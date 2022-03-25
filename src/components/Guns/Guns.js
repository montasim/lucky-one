import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';

const Guns = () => {
    const [guns, setGuns] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setGuns(data))
    }, [])

    return (
        <div>
            {
                guns.map(gun => <Gun key={gun.id} data={gun}></Gun>)
            }
        </div>
    );
};

export default Guns;