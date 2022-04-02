import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import useTshart from '../Hooks/UseTshart';

import Tshart from '../Tshart/Tshart';
import './Home.css'



const Home = () => {

    
    // const [tshart, setTshart] = useState([]);
    const [tshart, setTshart] = useTshart()
    const [card , setCard] = useState([])
    useEffect(()=>{
        fetch('tshirts.json')
        .then(res => res.json())
        .then(data =>setTshart(data) 
        )
      
    },[])

    const handleAddToCard = (selectItem) =>{
        const exist = card.find(item =>item._id === selectItem._id)

        const totalLength = card.length;
        if(!exist && totalLength < 4 ){
            const newCard = [...card , selectItem]
            setCard(newCard)
        }else{
            alert(' Four Item  alredy added')
        }
      
    }
   const removeBtn = item =>{
//    console.log(item);
       const removeItem = card.filter(cardItem =>cardItem._id !== item._id)
       setCard(removeItem)
    }
const clearAll = () =>{
    setCard([])
}


    return (
        <div className='home_container'>
        
            <div className="shop_container">
                <h1>Total shart : {tshart.length}</h1>

                {
                    tshart.map(shart =><Tshart 
                        key ={shart._id} 
                        shart ={shart}
                        handleAddToCard={handleAddToCard}
                    
                    ></Tshart>)
                }
            </div>
            <div className="card_container">
                        <Card card ={card} removeBtn={removeBtn} clearAll ={clearAll}></Card>
            </div>
        </div>
    );
};

export default Home;