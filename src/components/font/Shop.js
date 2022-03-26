import React, { useEffect, useState } from 'react';
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
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.div}
                        product={product}
                        handelToClick={handelToClick}

                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary
                </h3>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;