import React, { useEffect, useState } from 'react';
import Product from './Product';


const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.div}
                        product={product}
                        
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>This is for cart
                </h3>
            </div>
        </div>
    );
};

export default Shop;