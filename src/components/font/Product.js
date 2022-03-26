import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const {name, price, image} = props.product;
    return (
        <div className='product'>
          
                <img src={image} alt="" />
              <div className='product-info'>
              <p className='product-name'>{name}</p>
                <p className='product-price'>Price: <small>${price}</small></p>
              </div>
              <button className='btn-cart'>
                  <p>Add to cart</p>
              </button>
     
       </div>
    );
};

export default Product;