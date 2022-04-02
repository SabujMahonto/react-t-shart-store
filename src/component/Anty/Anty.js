import React from 'react';
import './Anty.css'

const Anty = ({house}) => {
    return (
        <div className='anty'>
            <h1>Anty</h1>
            <p>House{house}</p>
        </div>
    );
};

export default Anty;