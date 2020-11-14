/* utility function to increase the quantity of the item if added more then once
first we check the new added item if it already exists in the cart, if yes then we increase the quantity by one
and if that item is added first time then we just add quantity property on that object.
 */

export const AddItemToCart = (cartItems,CartItemToAdd) =>{


    const existingCartItem = cartItems.find(cartItem => cartItem.id ===CartItemToAdd.id);

    if(existingCartItem){

        return cartItems.map(cartItem => cartItem.id === CartItemToAdd.id ? {...cartItem,quantity: cartItem.quantity+1} : cartItem);
    }

    return [...cartItems,{...CartItemToAdd, quantity:1}];
}