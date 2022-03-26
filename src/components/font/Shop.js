import { faHourglass1, faHourglass2 } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Product from './Product';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart]= useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handelToClick = (product) => {
       const newCart =[...cart, product];
       setCart(newCart)
    };

    const chooseOne =()=>{
        const newArray = cart[Math.floor(Math.random()*cart.length)]
       
        setCart([newArray])
    }
    const chooseAgain=()=>{
        const arrayTwo =[];
        setCart(arrayTwo)

    }
    return (
        <div className='shop-container'>
            
            <div className="products-container">
               
            
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handelToClick={handelToClick}

                    ></Product>)
                }
            </div>
           

            <div className="cart-container">
                <h1>Selected Iteams</h1>
              {
                
                cart.map(iteams=><Cart iteams={iteams} key={iteams.id} chooseOne={chooseOne}></Cart>)
              }
              <button onClick={chooseOne}>Choose one for me</button>
           
              <button onClick={chooseAgain}>Choose again</button>
            </div>
            
           
               
            </div>

            
       
    );
};

export default Shop;