'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import logo from '../../../public/olividya.png'

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: '',
    studentClass: '',
    contact: '',
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function handlePayment(e) {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.studentClass || !formData.contact) {
      alert('Please fill all fields before proceeding.');
      return;
    }

    setLoading(true);

    try {
      // 1️⃣ Create order on your server
      const { data: order } = await axios.post('/api/create-order', {
        amount: 10000, // ₹100 in paise
      });

      if (!order?.id) throw new Error('Failed to create Razorpay order.');

      // 2️⃣ Setup Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '<YOUR_KEY_ID>',
        amount: order.amount,
        currency: order.currency,
        name: 'Olividya - The Girls Academy',
        description: 'Admission Form Payment',
        image: logo, // ✅ from public folder
        order_id: order.id,
        handler: async function (response) {
          try {
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
          name: formData.name,
          email: 'student@example.com',
          contact: formData.contact,
        },
        notes: {
          class: formData.studentClass,
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
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#4b5c09]">
        Admission Form Payment
      </h2>

      <form onSubmit={handlePayment} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter student's full name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#4b5c09] focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Class</label>
          <input
            type="text"
            name="studentClass"
            value={formData.studentClass}
            onChange={handleChange}
            placeholder="Enter class (e.g., 5th, 10th)"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#4b5c09] focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Contact Number</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter contact number"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#4b5c09] focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold text-white text-lg bg-[#4b5c09] hover:bg-[#627c0d] transition-all duration-200 shadow-md ${
            loading ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          {loading ? 'Processing...' : '💳 Pay ₹100'}
        </button>
      </form>

      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </div>
  );
}
