import "./index.css";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = ({ url }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      //recupérer les données du formulaire
      const cardElements = elements.getElement(CardElement);
      //Envoie des données à Stripe
      const stripeResponse = await stripe.createToken(cardElements, {
        name: "id de l'acheteur",
      });
      console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;
      //J'envoie le token au serveur via la route /payment de mon backend
      const response = await axios.post(`${url}payment`, {
        stripeToken: stripeToken,
      });
      //Si le paiement est validé je mets à jour mon state successMessage
      if (response.status === 200) {
        setSuccessMessage("Paiement validé");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <input className="btBlue" type="submit" />
      </form>
      {successMessage}
    </div>
  );
};

export default CheckoutForm;
