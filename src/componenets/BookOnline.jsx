import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// Replace 'your_publishable_key' with your actual publishable key
const stripePromise = loadStripe(
  "pk_test_51PJSKRSJGmPbBZfcWBNdPzduKZZTYT2DxfdO9f3RvXsqBPSblaEEH2hcrpsSf2uA1Zu9CEGIHZvWSCDqfiAc2oLO009EocklLO"
);

const BookOnline = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-black text-white">
      <h1 className="text-3xl font-semibold mb-4">Book Online</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default BookOnline;
