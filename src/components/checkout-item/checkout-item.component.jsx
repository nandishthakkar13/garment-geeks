import React from "react";
import "./checkout-item.styles.scss";

/**
 * Here we are pasing the whole item instead of destructuring the item because 
 * later we want to increase and decrease the quantity of the item
 * so we need the access to our item prop 
 */
const CheckoutItem = ({ item: { name, price, imageUrl, quantity } }) => {

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div className='remove-button'>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
