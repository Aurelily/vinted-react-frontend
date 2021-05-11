import { useHistory, Redirect } from "react-router-dom";

//Import des hooks Stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//Import du composant CheckoutForm
import CheckoutForm from "../components/CheckoutForm";

const Payment = ({ url, userToken }) => {
  //Envoie de ma clé public Stripe
  const stripePromise = loadStripe(
    "pk_test_51IpuRgFf20ZCaIGeS1trUvc0NVikXuqcARw0DAVv3blgmEdXfuu92f615vZlVaIJ2YdqSBeGBvGjESkenJrMCyjf00CxdcisJD"
  );
  return userToken ? (
    <Elements stripe={stripePromise}>
      <CheckoutForm url={url} />
    </Elements>
  ) : (
    <Redirect to="/login/" />
  );
};

export default Payment;
