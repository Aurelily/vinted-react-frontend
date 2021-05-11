import "./index.css";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = ({ url, title, amount, userId }) => {
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
        // name: "id de l'acheteur",
        name: userId,
        // title: title,
        // amount: amount,
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
    <div className="payment-wrapper">
      <div className="payment-container">
        <div className="payment-card">
          <div className="summary-title">Résumé de la commande</div>
          <div className="summary-content">
            <div>
              <span>Commande</span>
              <span>${amount} €</span>
            </div>
            <div>
              <span>Frais de protection acheteurs</span>
              <span>0.50 €</span>
            </div>
            <div>
              <span>Frais de port</span>
              <span>1.00 €</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="summary-total">
            <div>
              <span>Total</span>
              <span>6.50 €</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="payment-card">
            <div className="payment-final">
              {`Il ne vous reste plus qu'un étape pour vous offrir ${title}. Vous
              allez payer 6.5 € (frais de protection et frais de port inclus).`}
            </div>
            <div className="divider"></div>
            <form onSubmit={handleSubmit} className="paymentForm">
              <CardElement />
              <input className="btBlue" type="submit" value="Payer" />
            </form>
            {successMessage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
