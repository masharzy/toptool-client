import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loader from "../../Shared/Loader/Loader";
import ManageOrder from "../ManageOrder/ManageOrder";

const ManageOrders = () => {
  const navigate = useNavigate();
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", async () =>
    fetch("https://evening-everglades-24047.herokuapp.com/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("accessToken");
        signOut(auth);
        navigate("/login");
      }
      return res.json();
    })
  );
  if (isLoading) {
    return <Loader />;
  }
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
              <th>Total Price</th>
              <th>Payment Status</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <Loader />
            ) : (
              orders?.map((order, index) => (
                <ManageOrder
                  key={order._id}
                  index={index}
                  order={order}
                  refetch={refetch}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
