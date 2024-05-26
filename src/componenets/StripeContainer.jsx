import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PJSKRSJGmPbBZfcWBNdPzduKZZTYT2DxfdO9f3RvXsqBPSblaEEH2hcrpsSf2uA1Zu9CEGIHZvWSCDqfiAc2oLO009EocklLO"
);

const StripeContainer = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeContainer;
