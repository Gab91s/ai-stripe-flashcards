console.log("Loading getStripe module");

import { loadStripe } from "@stripe/stripe-js";

let stripePromise

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.local.NEXT_PUBLIC_STRIPE_KEY)
  }
  return stripePromise
}

export default getStripe;