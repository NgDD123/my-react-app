// VisaService.js
import axios from 'axios';
import React, { useEffect } from 'react';

const VisaCheckoutButton = ({ totalAmount, onPaymentSuccess, onPaymentError }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sandbox-assets.secure.checkout.visa.com/checkout-widget/resources/js/integration/v1/sdk.js';
    script.async = true;
    script.onload = () => {
      V.init({
        apikey: 'YOUR_VISA_API_KEY', // Replace with your actual Visa API key
        paymentRequest: {
          total: totalAmount,
          currency: 'USD',
        },
      });

      V.on('payment.success', (payment) => onPaymentSuccess(payment));
      V.on('payment.cancel', () => onPaymentError('Payment canceled'));
      V.on('payment.error', (error) => onPaymentError(error));
      V.on('payment.session.error', (error) => onPaymentError(error));

      V.initCheckoutButton('#visaCheckoutButton');
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [totalAmount, onPaymentSuccess, onPaymentError]);

  return <div id="visaCheckoutButton" />;
};

export default VisaCheckoutButton;

