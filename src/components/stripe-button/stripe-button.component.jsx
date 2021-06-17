import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J3LSsEVEHQcWoH97t1E6M20rlXbJbO4wYAE6QT3gcmnqmTktWxOV6OgpsZ2hxpi0fK4QYyQcozJ9HTyygOrkl6z00Lpci3qEy';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://image.shutterstock.com/image-vector/crown-vector-260nw-615661427.jpg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;