import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loader from "../../Shared/Loader/Loader";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const { email } = user;
  const navigate = useNavigate();
  const {
    isLoading,
    data: myOrders,
    refetch,
  } = useQuery("myOrders", () =>
    fetch(`http://localhost:5000/orders/${email}`, {
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
  return (
    <div className="container mx-auto text-left pl-5 pr-5">
      <h1 className="text-2xl font-bold">My Orders</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Tool Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Phone</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <Loader />
            ) : (
              myOrders?.map((myOrder, index) => (
                <MyOrder key={myOrder._id} index={index} myOrder={myOrder} refetch={refetch} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
