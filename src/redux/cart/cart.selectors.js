import {createSelector} from 'reselect';

/*two types of selectors
input selector
output selector - uses createSelector
*/

//Mainly selectors are used to memoize the state, we get the piece of the state that we want
// And if that piece of state doesnt change then it would send the old object only so it wont re-render ----this process is called Memoization.

  const  selectCart   = state => state.cart;

  export const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

  export const selectCartItemsCount = createSelector([selectCartItems], cartItems =>cartItems.reduce((accumulatedQuantity,cartItem) => accumulatedQuantity + cartItem.quantity , 0));