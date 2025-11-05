// app/api/verify-payment/route.js
import crypto from "crypto";

export async function POST(req) {
  const body = await req.json();
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;
  const key_secret = process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET;

  const generated_signature = crypto
    .createHmac("sha256", key_secret)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");

  if (generated_signature === razorpay_signature) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }
  return new Response(JSON.stringify({ ok: false }), { status: 400 });
}
