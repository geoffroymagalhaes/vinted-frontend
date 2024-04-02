import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios";

const CheckoutForm = ({ title, total }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (elements == null) {
      return;
    }

    // Vérification et validation des infos entrées dans les inputs
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Affiche l'erreur en question
      setErrorMessage(error.message);
      return;
    }

    // Demande au backend de créer l'intention de paiement, il nous renvoie le clientSecret
    const response = await axios.post(
      "https://site--backend-vinted--tvp4vjmpy6zn.code.run/payment",
      {
        title: title,
        total: total,
      }
    );

    const clientSecret = response.data.client_secret;

    const stripeResponse = await stripe.confirmPayment({
      elements,
      clientSecret,

      confirmParams: {
        return_url: "http://localhost:5173/",
      },
      redirect: "if_required",
    });

    if (stripeResponse.error) {
      setErrorMessage(stripeResponse.error.message);
    }

    if (stripeResponse.paymentIntent.status === "succeeded") {
      setCompleted(true);
    }
    setIsLoading(false);
  };

  return completed ? (
    <p>Paiement effectué</p>
  ) : (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        className="payButton"
        type="submit"
        disabled={!stripe || !elements || isLoading}
      >
        Pay
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;
