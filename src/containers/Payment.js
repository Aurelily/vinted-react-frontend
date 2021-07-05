import { Redirect, useLocation } from "react-router-dom";

//Import des hooks Stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//Import du composant CheckoutForm
import CheckoutForm from "../components/CheckoutForm";

const Payment = ({ url, userToken, userId }) => {
  const location = useLocation();
  const command = { ...location.state };

  //Envoie de ma clé public Stripe
  const stripePromise = loadStripe(
    "pk_test_51IpuRgFf20ZCaIGeS1trUvc0NVikXuqcARw0DAVv3blgmEdXfuu92f615vZlVaIJ2YdqSBeGBvGjESkenJrMCyjf00CxdcisJD"
  );

  return userToken ? (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        url={url}
        userId={userId}
        userToken={userToken}
        command={command}
      />
    </Elements>
  ) : (
    <Redirect to="/login/" />
  );
};

export default Payment;
