import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const { id, productName, price, productImage,productSpacefication } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemsAmount = cartItems[id] || 0;

    return (
        <div className='product'>
            <img src={productImage} alt={productName} />
            <div className='productDescription'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>
                <h6>{productSpacefication}</h6>
                </p>
                <p>${price}</p>
            </div>
            <button className='addToCartBttn' onClick={() => addToCart(id)}>
                Add To Cart {cartItemsAmount > 0 && <> ({cartItemsAmount})</>} 
            </button>
        </div>
    );
};
