'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function RazorpayButton({ amount = 10000 /* ₹100 in paise */ }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handlePayment(e) {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ Create order on server using Axios
      const { data: order } = await axios.post('/api/create-order', { amount });

      if (!order?.id) throw new Error('Failed to create Razorpay order.');

      // 2️⃣ Configure Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '<YOUR_KEY_ID>',
        amount: order.amount,
        currency: order.currency,
        name: 'Olividya - The Girls Academy',
        description: 'Admission Form Payment',
        image: '/olividya.png', // ✅ loads logo from public folder
        order_id: order.id,
        handler: async function (response) {
          try {
            // 3️⃣ Verify payment via your API
            const { data: verifyResult } = await axios.post('/api/verify-payment', response);

            if (verifyResult.ok) {
              alert('✅ Payment successful!');
              router.push('/'); // Redirect to homepage
            } else {
              alert('❌ Payment verification failed.');
            }
          } catch (err) {
            console.error('Verification error:', err);
            alert('Error verifying payment.');
          }
        },
        prefill: {
          name: 'Student Name',
          email: 'student@example.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Olividya Campus, India',
        },
        theme: {
          color: '#4b5c09',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error('Payment error:', err);
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={handlePayment}
        disabled={loading}
        className={`w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-white text-lg bg-[#4b5c09] hover:bg-[#627c0d] transition-all duration-200 shadow-md ${
          loading ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        {loading ? 'Processing...' : '💳 Pay ₹100'}
      </button>

      {/* Razorpay script */}
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </>
  );
}
