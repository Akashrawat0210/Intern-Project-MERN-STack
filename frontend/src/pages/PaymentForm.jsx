import React, { useState } from 'react';
import Razorpay from 'razorpay';

const PaymentForm = () => {
  const [paymentAmount, setPaymentAmount] = useState(1000); // Initial payment amount in paisa
  const [orderId, setOrderId] = useState('');

  const handlePayment = async () => {
    const response = await fetch('/api/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: paymentAmount })
    });
    const data = await response.json();

    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID',
      amount: paymentAmount,
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Payment for your purchase',
      order_id: data.orderId,
      handler: function(response) {
        alert('Payment successful');
        console.log(response);
      },
      prefill: {
        name: 'Your Name',
        email: 'your_email@example.com',
        contact: '9876543210'
      },
      theme: {
        color: '#3399cc'
      }
    };

    const rzp = new Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <h2>Payment Form</h2>
      <p>Total Amount: ${paymentAmount / 100}</p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentForm;
