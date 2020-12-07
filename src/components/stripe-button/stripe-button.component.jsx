import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

/*token and stripeKey are required props
stripeKey is your publishableKey
token is an onsuccess function => which you normally use in back-end to process the acutual payment (you get the token as parameter which is an object containing all the necessary details)
*/
const StripeCheckoutButton = ({price}) =>{

    //stripe wants the total in cents to process transaction
    const priceForStripe = 100 * price;
    const publishableKey = 'pk_test_51HvUh0Dmk6EJVluNaUGJVZ0j8CAeANdt9dyHfMtuuSBimYQ1vZbtEi1R05j5sv5s9mduaNcNrMurDEGgO1WqudEQ00s4B48cII';

    const onToken = (token) =>{

        alert('Payment Successful');
    }

    return(
        <StripeCheckout
        label='Pay Now'
        description = {`Your total is $${price}`}
        name='Garment Geeks Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        amount= {priceForStripe}
        stripeKey = {publishableKey}
        panelLabel='Pay Now'
        token={onToken}
        />
    );
}

export default StripeCheckoutButton;