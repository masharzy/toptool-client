import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content bg-[#F1F5F9] pt-10">
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          {!admin && (
            <>
              <li>
                <Link to="myOrders">My Orders</Link>
              </li>
              <li>
                <Link to="addReview">Add A Review</Link>
              </li>
            </>
          )}
          {admin && (
            <>
              <li>
                <Link to="manageAllOrders">Manage All Orders</Link>
              </li>
              <li>
                <Link to="addAProduct">Add A Product</Link>
              </li>
              <li>
                <Link to="makeAdmin">Make Admin</Link>
              </li>
              <li>
                <Link to="manageProducts">Manage Products</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
