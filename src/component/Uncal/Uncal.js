import React from 'react';
import './Uncel.css'

const Uncal = ({house}) => {
    return (
        <div className='uncel'>
            <h1>Uncel</h1>
            <p>house{house}</p>
        </div>
    );
};

export default Uncal;