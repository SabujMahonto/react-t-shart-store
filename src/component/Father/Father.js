import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';
import './Father.css'

const Father = ({house,gift,}) => {
    return (
        <div className='father'>
            <h1>Father</h1>
            <p>house{house}</p>
            <div className='father-child'>
            <Myself house ={house} gift ={gift}></Myself>
            <Brother house ={house}></Brother>
            <Sister house ={house}></Sister>
            </div>
        </div>
    );
};

export default Father;