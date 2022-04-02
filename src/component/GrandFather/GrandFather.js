import React, { createContext, useState } from 'react';
import Anty from '../Anty/Anty';
import Father from '../Father/Father';
import Uncal from '../Uncal/Uncal';
import './GrandFather.css'
export const GiftContext = createContext('ring')
 


const GrandFather = () => {    
    const haldleincrise = ()=>{
        const newValue = house + 1;
        setHouse(newValue)

    }
 const [house, setHouse]= useState(1)
  
    return (
     <GiftContext.Provider value={'mati'}>

        <div className='grandfather'>
            
            <h1>GrandFather</h1>
            <button onClick={haldleincrise}>ADD House</button>
            <h5> House{house}</h5>
           <div className='grandfa-child'>
           <Father house ={house} ></Father>
            <Uncal house ={house}></Uncal>
            <Anty house ={house}></Anty>
           </div>
        </div>
        </GiftContext.Provider>
      
    );
};

export default GrandFather;