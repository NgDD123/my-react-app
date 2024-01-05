import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import "./checkout.css"

const Checkout = () => {
    const location = useLocation();
    const { cartItems, totalAmount } = location.state;

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        country: '',
        streetAddress: '',
        apartment: '',
        city: '',
        phone: '',
        email: '',
    });
    const [creditCardDetails, setCreditCardDetails] = useState({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
      });
      const handleCreditCardChange = (e) => {
        const { name, value } = e.target;
        setCreditCardDetails((prevDetails) => ({
          ...prevDetails,
          [name]: value,
        }));
      };

      const handleCreditCardSubmit = (e) => {
        e.preventDefault();
      };
      const handleCashOnDeliverySubmit = (e) => {
        e.preventDefault();
      };

    const [paymentMethod, setPaymentMethod] = useState('momo');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission and payment processing here
        // You can access formData, paymentMethod, phone, cartItems, and totalAmount
        console.log('Form Data:', formData);
        console.log('Payment Method:', paymentMethod);
        console.log('Phone:', phone);
        console.log('Cart Items:', cartItems);
        console.log('Total Amount:', totalAmount);

        // Add your actual payment processing logic here
        // This is where you might integrate with a payment gateway
        // and handle the transaction details

        // Redirect or show a success message after successful payment
        // navigate('/order-success');
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
                    <label htmlFor="companyName">Company Name:</label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
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
                    <label htmlFor="apartment">Apartment:</label>
                    <input
                        type="text"
                        id="apartment"
                        name="apartment"
                        value={formData.apartment}
                        onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
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
                            value="momo"
                            checked={paymentMethod === 'momo'}
                            onChange={() => setPaymentMethod('momo')}
                        />
                        Mobile Wallet (MoMo or Airtel)
                    </div>
                    {/* ... (other payment options) */}
                </div>
                {paymentMethod === 'momo' && (
                    <div className="form-group">
                        <label htmlFor="phone">Enter your phone number:</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <label htmlFor="cardNumber">Card Number:</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={creditCardDetails.cardNumber}
                          onChange={handleCreditCardChange}
                        />
                        {/* Add other credit card details fields (expiration date, CVV, etc.) */}
                        {/* ... */}
                        <button type="submit" onClick={handleCreditCardSubmit}>
                          Pay with Credit Card
                        </button>
                        <label htmlFor="codNumber">Card Code:</label>
                        <input
                          type="text"
                          id="cardCod"
                          name="cardCod"
                          value={creditCardDetails.cardCod}
                          onChange={handleCreditCardChange}
                        />
                        <button type="submit" onClick={handleCreditCardSubmit}>
                          Enter CardCode
                        </button>
                    </div>
                )}
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};

export default Checkout;
