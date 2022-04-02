import React from 'react';
import './Card.css'

const Card = ({card,removeBtn,clearAll}) => {
    // conditional rendering option 
    // 1. Element Variable 
    // 2. ternary operator 
   let command;
   if(card.length === 0){
       command = <p>please add one item</p>
   } 
   else if(card.length <= 3){
       command = <p>please add minimum 4 item </p>
   }else {
       command = <p> your limited sesh thank for adding 4 item</p>
    }
                   

    return (
        <div className='card'>

            <h1>Card {card.length}</h1>

            {/* {

                if(card.length  <0 || card.length >4){
                       
                
                }
            } */}
           
            {
                card.map(card => <div key ={card._id}>
                    <p>{card.name}</p>
                  <p>Price${card.price}</p>
                    <button onClick={()=>removeBtn(card)}>X</button>
                </div>)
            }


            {card.length !== 0 && <p></p> }
            {command}
            {card.length !== 4 ? <p>Keep adding</p>: <button onClick={clearAll}>Remove All
                </button>}
        </div>
    );
};

export default Card;