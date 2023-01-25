import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51MUAX0CJwohfxtLmKeM853OWMb6aV7gtrkgkOy5fyLzdqavdkcJj8hctfsBVlwKGdBGwRcWTCAr82sxCVHFnfFPc00Ud3lOnjY');
  }

  return stripePromise;
}

export default getStripe;