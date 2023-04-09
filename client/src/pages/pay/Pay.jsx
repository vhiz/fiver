import "./pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { makeRequest } from "../../axios";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LCk7IIwkAcg4u23OtN42fhTDECdywjY6myH2zZAvXYNCbTkasduogL6OA5ncdGoyao8tEFKdJdkyjz0ck7Y3J2q00GqicGiMA"
);

export default function Pay() {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const stripeRequest = async () => {
      setLoading(true);
      try {
        const res = await makeRequest.post(`/orders/create-payment-intent/${id}`);
        setClientSecret(res.data.clientSecret);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
        setLoading(false);
      }
    };
    stripeRequest();
  }, [id]);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="pay">
      {loading ? (
        <div className="load">
          <img src="/icon/loading.gif" alt="" />
        </div>
      ) : isError ? (
        <div className="load">
          <img src="/icon/error.gif" alt="" />
        </div>
      ) : (
        clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )
      )}
    </div>
  );
}
