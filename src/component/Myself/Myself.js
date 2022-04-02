import React from 'react';
import Speacial from '../Speacial/Speacial';

const Myself = ({house,gift}) => {
    return (
        <div>
            <h1>Me</h1>
            <p>{house}</p>
            <Speacial gift ={gift}></Speacial>
        </div>
    );
};

export default Myself;