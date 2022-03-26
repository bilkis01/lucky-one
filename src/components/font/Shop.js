import React, { useEffect, useState } from 'react';
import Card from './Card';
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
               <Card cart={cart}></Card>
            </div>
        </div>
    );
};

export default Shop;