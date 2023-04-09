import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { makeRequest } from "../../axios";

export default function Success() {
  const navigate = useNavigate();
  const { search } = useLocation();

  const params = new URLSearchParams(search);

  const payment_intent = params.get("payment_intent");

  useEffect(() => {
    const stripeRequest = async () => {
      try {
        await makeRequest.put("/orders", { payment_intent });
        setTimeout(() => {
          navigate("/app/orders");
        }, 5000);
      } catch (error) {
        console.log(error);
      }
    };
    stripeRequest();
  }, []);

  return (
    <div className="load" style={{ flexDirection: "column" }}>
      Payment Success. You are beign redirected to the orders page . please do
      not close this page
      <img src="/icon/loading.gif" alt="" />
    </div>
  );
}
