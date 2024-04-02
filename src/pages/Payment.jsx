import "../App.css";
import { Navigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51P15Pn08uNNvZpoGatTbJuP70oljqNOFjXfEkoUq9s1K14OoTj3l1wfGUgslDTpD3Z1JWgKckPLHDlIl8clddh9z00qxh99BlJ"
);

import { useLocation } from "react-router-dom";

const Payment = ({ token }) => {
  const location = useLocation();
  const { price } = location.state;
  const { title } = location.state;

  const productPrice = parseInt(price);
  const buyerFeeProtection = 0.59;
  const shippingCost = 1.18;
  const total = (productPrice + buyerFeeProtection + shippingCost).toFixed(2);

  const options = {
    // Type de transaction
    mode: "payment",
    // Montant de la transaction
    amount: Number((total * 100).toFixed(0)),
    // Devise de la transaction
    currency: "eur",
    // On peut customiser l'apparence ici
  };
  return token ? (
    <main className="backColor">
      <section className="paimentContainer">
        <div>
          <h3>Résumé de la commande</h3>
          <article className="paimentSubtotal">
            <h2>Commande</h2>
            <p>
              <span id="productPrice">{price}</span>€
            </p>
          </article>
          <article className="paimentSubtotal">
            <h2>Frais protection acheteurs</h2>
            <p>
              <span id="buyerFeeProtection">0.59</span>€
            </p>
          </article>
          <article className="paimentSubtotal">
            <h2>Frais de port</h2>
            <p>
              <span id="shippingCost">1.18</span>€
            </p>
          </article>
        </div>
        <div className="bottomborderPayment">
          <article className="paiementTotal">
            <h2 id="total">Total</h2>
            <p>
              <span>{total}</span>€
            </p>
          </article>
          <h4>
            Il ne vous reste plus qu'un étape pour vous offrir
            <span> {title}</span> . Vous allez payer <span>{total} € </span>
            (frais de protection et frais de port inclus).
          </h4>
        </div>
        <div className="stripe">
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm total={total} title={title} />
          </Elements>
        </div>
      </section>
    </main>
  ) : (
    <Navigate to="/login" />
  );
};
export default Payment;
