const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const ID= process.env.ID

const razorpay = new Razorpay({
  key_id: ID,
  key_secret: 'YOUR_RAZORPAY_KEY_SECRET'
});

router.post('/api/payment', async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount,
    currency: 'INR',
    receipt: 'receipt_order_74394'
  };

  try {
    const response = await razorpay.orders.create(options);
    res.json({ orderId: response.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
