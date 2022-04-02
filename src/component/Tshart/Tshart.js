import React from 'react';
import './Tshart.css'

const Tshart = ({shart,handleAddToCard}) => {
    // console.log(shart);
    const {name,picture,price} = shart;
    return (
        <div className='tshart_container'>
            <img src={picture} alt="TShart_Picture" />
            <p>Price:{price}</p>
            <p>Name:{name}</p>
            <button onClick={()=>handleAddToCard(shart)}>Add to Card</button>
        </div>
    );
};

export default Tshart;