import React from "react";
import { useContext } from "react";
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data || {};
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
  return (
    <div className='CartItem' >
      <img src={productImage} />
      <div className='description'>
        <p><b> {productName} </b></p>
        <p> ${price}</p>
        <div className="countHolder">
          <button onClick={() => addToCart(id)}>- </button>
          <input value={cartItems [id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
          <button onClick={() => removeFromCart(id)}>- </button>
        </div>
      </div>
    </div>
  );
};
  