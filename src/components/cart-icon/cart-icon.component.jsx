import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

const CartIcon = ({toggleCartHidden,itemCount}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

//why cant we do just dispatch(toggleCartHidden()) instead of () => dispatch(toggleCartHidden()) and then fire a function inside the onclick function like () => toggleCartHidden instead of just toggleCartHidden both these instances gives different results.
const mapDispatchToProps = dispatch =>({
  toggleCartHidden : () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({

  itemCount: selectCartItemsCount
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
