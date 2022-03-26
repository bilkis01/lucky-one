import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, price, image , ratings} = props.product;
    return (
        <div className='product'>

            <img src={image} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: <small>${price}</small></p>
                <p >Ratings: <small>{ratings}</small></p>
            </div>
            <button onClick={()=> props.handelToClick(props.product)}  className='btn-cart'>
                <p>Add to cart</p>
            </button>

        </div>
    );
};

export default Product;