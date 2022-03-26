import React from 'react';
import './Cart.css';

const Cart = ({ iteams}) => {
    
 const{name, image}= iteams;
    return (
        <div className='cart'>
            <img src={image} alt="" />
            <div className='cart-info'>
                <h3 className='cart-name'>{name}</h3>
            </div>
           
        </div>
        
       
    );
};

export default Cart;