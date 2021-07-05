import "./index.css";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

//import component
import ModalFinal from "../ModalFinal";

const CheckoutForm = ({ url, userId, userToken, command }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [successMessage, setSuccessMessage] = useState("");
  const [showModal, setShowModal] = useState("");
  const title = command.title;
  const amount = command.amount;
  const id = command.id;
  const fraisProtec = 0.5;
  const fdp = 1;
  const total = (amount + fraisProtec + fdp).toFixed(2);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      //recupérer les données du formulaire
      const cardElements = elements.getElement(CardElement);
      //Envoie des données à Stripe
      const stripeResponse = await stripe.createToken(cardElements, {
        name: `${userId}`,
      });
      console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;
      //J'envoie le token au serveur via la route /payment de mon backend
      const response = await axios.post(`${url}payment`, {
        stripeToken: stripeToken,
        title: title,
        amount: total,
        userId: userId,
      });
      //Si le paiement est validé je mets à jour mon state successMessage
      if (response.status === 200) {
        // setSuccessMessage("Votre paiement a bien été validé");
        setShowModal(true);
        const deletionResponse = await axios.delete(
          `${url}offer/delete/${id}`,

          {
            headers: {
              authorization: `Bearer ${userToken}`,
            },
            data: {
              id: userId,
            },
          }
        );
        console.log(deletionResponse);
      } else {
        setSuccessMessage("An error occured");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="payment-wrapper">
      {showModal && (
        <ModalFinal showModal={showModal} setShowModal={setShowModal} />
      )}
      <div className="payment-container">
        <div className="payment-card">
          <div className="summary-title">{`Résumé de la commande :`}</div>
          <div className="summary-content">
            <div className="summary-line">
              <span>Commande</span>
              <span>{`${amount} €`}</span>
            </div>
            <div className="summary-line">
              <span>Frais de protection acheteurs</span>
              <span>{`${fraisProtec} €`}</span>
            </div>
            <div className="summary-line">
              <span>Frais de port</span>
              <span>{`${fdp} €`}</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="summary-total">
            <div>
              <span>Total</span>
              <span>{`${total} €`}</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="payment-card">
            <div className="payment-final">
              <span>Il ne vous reste plus qu'un étape pour vous offrir </span>
              <span style={{ fontWeight: "bold" }}> {`${title}.`}</span>
              <span>Vous allez payer :</span>
              <span style={{ fontWeight: "bold" }}>{`${total}`}</span>
              <span>€ (frais de protection et frais de port inclus).</span>
            </div>
            <div className="divider"></div>
            <form onSubmit={handleSubmit} className="paymentForm">
              <p style={{ fontSize: "11px", marginBottom: "20px" }}>
                Pour tester la démo du service :
                <p>
                  {" "}
                  N° de carte 4242424242424242 date: 04/24 CVC: 242 ZipCode :
                  42424
                </p>
              </p>
              <CardElement />
              <input className="btBlue" type="submit" value="Payer" />
            </form>
            <p>{successMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
