import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_uaAcq9AVQU1pHfFg5lg2cIH000C1rGnmyO";

    const onToken = token => {
        axios({
            // url: 'payment',
            url: 'http://localhost:5000/payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(reponse => {
            alert('Payment successful');
        }).catch(error => {
            console.log('Payment error: ', error);
            alert(
                'There was an issue with your payment. Please sure you use the provided credit cart.'
            )
        })
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWM Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;