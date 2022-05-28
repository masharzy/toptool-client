import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../../Shared/Loader/Loader";

const CheckoutForm = ({ order }) => {
  const { _id, name, email, price, address, phone } = order;
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(
        "https://evening-everglades-24047.herokuapp.com/create-payment-intent",
        { price },
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        if (res.data?.clientSecret) {
          setClientSecret(res.data.clientSecret);
        }
      });
  }, [price]);

  useEffect(() => {
    if (success) {
      Swal.fire({
        title: "Payment Successful",
        html: `Transaction ID: <b>${transactionId}</b>`,
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate("/dashboard/myOrders");
    }
  }, [success, transactionId, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setTransactionId("");
    setLoading(true);

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
            phone: phone,
            address: address,
          },
        },
      });

    // setCardError(intentError?.message || "");
    if (intentError) {
      setCardError(intentError?.message);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      setSuccess("Payment Successful");
      setLoading(false);
      const payment = {
        transactionId: paymentIntent.id,
        paid: paymentIntent.status === "succeeded",
        status: "pending",
      };
      fetch(`https://evening-everglades-24047.herokuapp.com/order/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {cardError && <p className="text-red-500 mt-2">{cardError}</p>}
        <button
          className={
            loading
              ? "btn btn-success mt-4 animate-spin"
              : "btn btn-success mt-4"
          }
          type="submit"
          disabled={!stripe || !clientSecret || success}
        >
          {loading ? "Loading..." : "Pay"}
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
