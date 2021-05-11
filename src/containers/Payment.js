import { Redirect, useParams, useLocation } from "react-router-dom";

//Import des hooks Stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//Import du composant CheckoutForm
import CheckoutForm from "../components/CheckoutForm";

const Payment = ({ url, userToken }) => {
  //   const location = useLocation();
  //   const { title, amount, userId } = location.state;
  //   const realAmount = price.toFixed(2);
  //Envoie de ma clé public Stripe

  //Récupérer le product_name et le product_price du paramètre passé dans l'URL  payment/:title/:amount/:name
  const { title, amount, userId } = useParams();
  //   const { amount } = useParams();
  //   const { userId } = useParams();

  const stripePromise = loadStripe(
    "pk_test_51IpuRgFf20ZCaIGeS1trUvc0NVikXuqcARw0DAVv3blgmEdXfuu92f615vZlVaIJ2YdqSBeGBvGjESkenJrMCyjf00CxdcisJD"
  );

  return userToken ? (
    <Elements stripe={stripePromise}>
      {/* <CheckoutForm url={url} /> */}
      <CheckoutForm url={url} title={title} amount={amount} userId={userId} />
    </Elements>
  ) : (
    <Redirect to="/login/" />
  );
};

export default Payment;
