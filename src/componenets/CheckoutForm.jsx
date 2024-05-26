import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Submitting payment form...");

    if (!stripe || !elements) {
      console.log("Stripe or Elements not initialized.");
      return;
    }

    setIsLoading(true);

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("Payment method creation error:", error);
      setPaymentStatus("Payment failed: " + error.message);
      setIsLoading(false);
    } else {
      console.log("Payment method created:", paymentMethod);

      const response = await fetch("/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
      });

      const result = await response.json();
      console.log("Payment intent creation result:", result);

      if (!result) {
        setPaymentStatus("Payment failed: Empty response from server");
      } else if (result.error) {
        setPaymentStatus("Payment failed: " + result.error);
      } else {
        setPaymentStatus("Payment successful!");
      }

      setIsLoading(false);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement
        className="p-3 border border-gray-300 rounded-lg bg-white"
        options={{
          style: {
            base: {
              fontSize: "16px",
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe || isLoading}
        className="bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600 disabled:opacity-50"
      >
        {isLoading ? "Processing..." : "Pay"}
      </button>
      {paymentStatus && (
        <div
          className={`p-3 text-white ${
            paymentStatus.includes("failed") ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {paymentStatus}
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
