// app/api/create-order/route.js
import Razorpay from "razorpay";

export async function POST(req) {
  try {
    const body = await req.json();
    const { amount, currency = "INR", receipt = "rcpt_1" } = body;

    const instance = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET,
    });

    const order = await instance.orders.create({
      amount,
      currency,
      receipt,
      payment_capture: 1,
    });

    return new Response(JSON.stringify(order), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
