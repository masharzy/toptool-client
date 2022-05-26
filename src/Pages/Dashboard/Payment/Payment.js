import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loader from "../../Shared/Loader/Loader";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import "./Payment.css";

const Payment = () => {
  const { id } = useParams();

  const { data: order, isLoading } = useQuery(["payment", id], () =>
    fetch(`http://localhost:5000/order/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loader />;
  }

  const { name, email, toolID, toolName, price, quantity, address, phone } =
    order;

  console.log(order);

  const stripePromise = loadStripe(
    "pk_test_51L2pFyD9mMGF7uwt14gUjXz4cIvPdp062V2rX01Sdt8g002c1qXKK9FGcR8gM2KLZiRQk3wZJYdkpNwxYKXeyXLB00Z85Eb8lL"
  );

  return (
    <div className="payment">
      <div class="card flex-shrink-0 w-1/2 mx-auto shadow-2xl bg-base-100">
        <div class="card-body">
          <h2 class="card-title">User Info</h2>
          <p class="card-text text-left">
            <h4><span className="font-bold">Name:</span> {name}</h4>
            <h4><span className="font-bold">Email:</span> {email}</h4>
            <h4><span className="font-bold">Address:</span> {address}</h4>
            <h4><span className="font-bold">Phone:</span> {phone}</h4>
          </p>
        </div>
      </div>
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <h2 class="card-title">Payment Info</h2>
              <p class="card-text">
                <Elements stripe={stripePromise}>
                  <CheckoutForm order={order} />
                </Elements>
              </p>
            </div>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <h2 class="card-title">Tool Info</h2>
              <p class="card-text">
                <div class="form-control">
                  <label className="label" for="toolName">
                    Tool Name
                  </label>
                  <input
                    type="text"
                    class="input input-bordered"
                    id="toolName"
                    placeholder="Tool Name"
                    value={toolName}
                    disabled
                  />
                </div>
                <div class="form-control">
                  <label className="label" for="quantity">
                    Quantity
                  </label>
                  <input
                    type="text"
                    class="input input-bordered"
                    id="quantity"
                    placeholder="Quantity"
                    value={quantity}
                    disabled
                  />
                </div>
                <div class="form-control">
                  <label className="label" for="price">
                    Price (Per Unit)
                  </label>
                  <input
                    type="text"
                    class="input input-bordered"
                    id="price"
                    placeholder="Price"
                    value={price}
                    disabled
                  />
                </div>
                <div class="form-control">
                  <label className="label" for="totalPrice">
                    Total Price
                  </label>
                  <input
                    type="text"
                    class="input input-bordered"
                    id="totalPrice"
                    placeholder="Total Price"
                    value={price * quantity}
                    disabled
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
