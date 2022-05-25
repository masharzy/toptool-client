import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loader from "../Shared/Loader/Loader";

const Purchase = () => {
  const [user, loading] = useAuthState(auth);
  const [errors, setErrors] = useState({
    quantity: "",
    address: "",
    phone: "",
  });
  const handlePurchase = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const toolId = e.target.toolId.value;
    const toolName = e.target.toolName.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    if (address === "") {
      return setErrors({ ...errors, address: "Address is required" });
    } else if (phone === "") {
      return setErrors({ ...errors, phone: "Phone is required" });
    }
    const purchase = {
      name,
      email,
      toolId,
      toolName,
      price,
      quantity,
      address,
      phone,
    };
    console.log(purchase);
  };
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: tool, isLoading } = useQuery(["tool", id], () =>
    fetch(`http://localhost:5000/tool/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("accessToken");
        signOut(auth);
        navigate("/");
      }
      return res.json();
    })
  );
  if (isLoading) {
    return <Loader />;
  }
  if (loading) {
    return <Loader />;
  }
  const { displayName, email } = user;
  const {
    _id,
    toolName,
    toolImage,
    toolDescription,
    toolMinimumOrderQuantity,
    toolAvailableQuantity,
    toolPrice,
  } = tool;

  return (
    <div className="container mx-auto mb-10">
      <div className="title my-10">
        <h1 className="text-5xl text-primary font-bold">
          Welcome to purchase page
        </h1>
        <p className="text-secondary text-base">
          Here you will see details information of: <strong>{toolName}</strong>
        </p>
      </div>

      <div className="flex items-center justify-center flex-wrap tool-info">
        <div className="tool-image">
          <img className="w-96" src={toolImage} alt="TopTool" />
        </div>
        <div class="overflow-x-auto rounded-sm">
          <table class="table w-full">
            <tbody>
              <tr>
                <td class="border">
                  <strong>ID:</strong>
                </td>
                <td class="border">{_id}</td>
              </tr>
              <tr>
                <td class="border">
                  <strong>Name:</strong>
                </td>
                <td class="border">{toolName}</td>
              </tr>
              <tr>
                <td class="border">
                  <strong>Description:</strong>
                </td>
                <td class="border">{toolDescription}</td>
              </tr>
              <tr>
                <td class="border">
                  <strong>Minimum Order Quantity:</strong>
                </td>
                <td class="border">{toolMinimumOrderQuantity}</td>
              </tr>
              <tr>
                <td class="border">
                  <strong>Available Quantity:</strong>
                </td>
                <td class="border">{toolAvailableQuantity}</td>
              </tr>
              <tr>
                <td class="border">
                  <strong>Price:</strong>
                </td>
                <td class="border">{toolPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="purchase-forms">
        <div className="title my-10">
          <h1 className="text-5xl text-primary font-bold">
            Purchase This Tool
          </h1>
          <p className="text-secondary text-base">
            To Purchase
            <strong> {toolName}</strong>, please fill the form below
          </p>
        </div>
        <form
          className="w-full px-5 lg:w-[500px] md:w-[300px] mx-auto"
          onSubmit={handlePurchase}
        >
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              id="name"
              className="input input-bordered"
              value={displayName}
              disabled
              name="name"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              id="email"
              className="input input-bordered"
              value={email}
              disabled
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="toolId">
              <span className="label-text">Tool ID</span>
            </label>
            <input
              type="text"
              id="toolId"
              className="input input-bordered"
              value={_id}
              disabled
              required
              name="toolId"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="toolName">
              <span className="label-text">Tool Name</span>
            </label>
            <input
              type="text"
              id="toolName"
              className="input input-bordered"
              value={toolName}
              disabled
              name="toolName"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="price">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              id="price"
              className="input input-bordered"
              value={toolPrice}
              disabled
              name="price"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="quantity">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              id="quantity"
              className="input input-bordered"
              defaultValue={toolMinimumOrderQuantity}
              name="quantity"
              onChange={(e) => {
                if (e.target.value === "") {
                  setErrors({
                    ...errors,
                    quantity: "Quantity is required",
                  });
                } else if (e.target.value < toolMinimumOrderQuantity) {
                  setErrors({
                    ...errors,
                    quantity: `You have to purchase at least ${toolMinimumOrderQuantity} products`,
                  });
                } else if (e.target.value > toolAvailableQuantity) {
                  setErrors({
                    ...errors,
                    quantity: `You can't purchase more than ${toolAvailableQuantity} products`,
                  });
                } else {
                  setErrors({
                    ...errors,
                    quantity: "",
                  });
                }
              }}
            />
            {errors?.quantity && (
              <p className="text-red-600 text-left font-semibold">
                {errors.quantity}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label" htmlFor="address">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              id="address"
              className="input input-bordered"
              name="address"
              onChange={(e) => {
                if (e.target.value === "") {
                  setErrors({
                    ...errors,
                    address: "Address is required",
                  });
                } else {
                  setErrors({
                    ...errors,
                    address: "",
                  });
                }
              }}
            />
            {errors?.address && (
              <p className="text-red-600 text-left font-semibold">
                {errors.address}
              </p>
            )}
          </div>
          <div className="form-control mb-3">
            <label className="label" htmlFor="phone">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              id="phone"
              className="input input-bordered"
              name="phone"
              onChange={(e) => {
                if (e.target.value === "") {
                  setErrors({
                    ...errors,
                    phone: "Phone Number is required",
                  });
                } else if (e.target.value.length < 11) {
                  setErrors({
                    ...errors,
                    phone: "Phone Number must be 11 digits",
                  });
                } else {
                  setErrors({
                    ...errors,
                    phone: "",
                  });
                }
              }}
            />
            {errors?.phone && (
              <p className="text-red-600 text-left font-semibold">
                {errors.phone}
              </p>
            )}
          </div>
          <div className="form-control">
            <button
              disabled={
                errors.quantity || errors.address || errors.phone ? true : false
              }
              className={"btn btn-primary text-white no-animation"}
            >
              Purchase
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
