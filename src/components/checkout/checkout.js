import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import axios from 'axios';
import './checkout.css';

const Checkout = () => {
  const location = useLocation();
  const { cartItems, totalAmount } = location.state;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    streetAddress: '',
    city: '',
    phone: '',
    email: '',
  });

  const [creditCardDetails, setCreditCardDetails] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    totalAmount
  });

  const handleCreditCardChange = (e) => {
    const { name, value } = e.target;
    setCreditCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCreditCardSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send credit card information to your server for processing
      const response = await axios.post('http://localhost:3001/checkout', { 
      formData 
      });
      console.log('RESULT SECTION', response)
      if (!response.ok) {
        if (response.status === 500) {
          throw new Error('Server error. Please try again later.'); // Handle 500 Internal Server Error
        } else if (response.status === 400) {
          throw new Error('Bad request. Please check your input data.'); // Handle 400 Bad Request
        } else {
          throw new Error('Unexpected error. Please try again later.'); // Handle other errors
        }
      }
      const result = await response.json();
      console.log(result); // Handle the result as needed
      if (result.success) {
        const transactionId = result.transactionId;
        // Payment was successful
        console.log('Payment was successful. Transaction ID:', transactionId);
        // You can perform further actions here, like updating UI or notifying the user
      } else {
        // Payment failed
        console.log('Payment failed:', result.error);
        // Y console.log('Payment was successful. Transaction ID:', transactionId);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCashOnDeliverySubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/cash-on-delivery', {
        method: 'POST',
        headers: {
          'Content-Type': 'checkout',
        },
        body: JSON.stringify({ formData, cartItems, totalAmount }), // Include totalAmount
      });
  
      const result = await response.json();
      console.log(result); // Handle the result as needed
    } catch (error) {
      console.error(error);
    }
  };
  const [paymentMethod, setPaymentMethod] = useState('visa');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === 'visa') {
      handleCreditCardSubmit(e);
    } else {
      handleCashOnDeliverySubmit(e);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {Object.keys(cartItems).map((itemId) => {
            const product = PRODUCTS.find((product) => product.id === itemId);

            if (product) {
              return (
                <li key={itemId}>
                  {product.name}: {cartItems[itemId]}
                </li>
              );
            }
            return null; // or handle the case when the product is not found
          })}
        </ul>
        <p>Total Amount: ${totalAmount}</p>
      </div>

      <form onSubmit={handleSubmit} className="checkout-form">
        {/* Billing details */}
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="streetAddress">Street Address:</label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        {/* Payment options */}
        <div className="form-group">
          <label>Select your payment method:</label>
          <div>
            <input
              type="radio"
              name="paymentMethod"
              value="visa"
              checked={paymentMethod === 'visa'}
              onChange={() => setPaymentMethod('visa')}
            />
            Card Number & ID (Visa or MasterCard)
          </div>
          {paymentMethod === 'visa' && (
            <div className="Card-group">
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={creditCardDetails.cardNumber}
                onChange={handleCreditCardChange}
              />
              <label htmlFor="expirationDate">Expiration Date:</label>
              <input
                type="text"
                id="expirationDate"
                name="expirationDate"
                value={creditCardDetails.expirationDate}
                onChange={handleCreditCardChange}
              />
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={creditCardDetails.cvv}
                onChange={handleCreditCardChange}
              />
               <label htmlFor="Totalamaount">Total Amount:</label>
              <input
                type="text"
                id="totalAmount"
                name="totalAmount"
                value={creditCardDetails.totalAmount}
                onChange={handleCreditCardChange}
              />
            </div>
          )}
        </div>
        <button type="submit" className='Button-Pay'>PLACE TO PAY</button>
      </form>
    </div>
  );
};

export default Checkout;
