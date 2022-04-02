import React, { useContext } from 'react';
import { GiftContext } from '../GrandFather/GrandFather';

const Speacial = () => {
    const ring = useContext(GiftContext)
    return (
        <div>
            <h1>Spicial</h1>
            <p>Gift:{ring}</p>
        </div>
    );
};

export default Speacial;