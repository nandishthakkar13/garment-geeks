import React from "react";
import "./checkout-item.styles.scss";
import {clear_Item_From_Cart,addItem,removeItem} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';

/**
 * Here we are pasing the whole item instead of destructuring the item because 
 * later we want to increase and decrease the quantity of the item
 * so we need the access to our item prop 
 */
const CheckoutItem = ({ item, clearItem,addItem,removeItem }) => {

    const { name, price, imageUrl, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
      <div className='arrow' onClick={()=>removeItem(item)}>&#10094;</div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={()=> addItem(item)} >&#10095;</div>
      </span>
    
      <span className="price">${price}</span>
      <div className='remove-button' onClick={() => clearItem(item)}>&#10005;</div>

     
    </div>
  );
};

const mapDispatchToProps = dispatch =>({
    clearItem : (item) => dispatch(clear_Item_From_Cart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem : (item) => dispatch(removeItem(item))
})
export default connect(null,mapDispatchToProps)(CheckoutItem);
