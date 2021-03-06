import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const AllUser = ({ user, index, refetch }) => {
  const navigate = useNavigate();
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`https://evening-everglades-24047.herokuapp.com/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          toast.error("You are not authorized to make this user admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`${email} is now an admin`);
          refetch();
        }
      });
  };

  const deleteUser = () => {
    fetch(`https://evening-everglades-24047.herokuapp.com/user/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem("accessToken");
          signOut(auth);
          navigate("/");
        }
        return res.json();
      })
      .then((data) => {
        toast.success(`${email} deleted`);
        refetch();
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role === "admin" ? (
          <h2>Admin</h2>
        ) : (
          <div className="flex flex-col">
            <p className="text-center">User</p>
            <button
              onClick={makeAdmin}
              className="btn btn-accent text-white rounded-full"
            >
              Make Admin
            </button>
          </div>
        )}
      </td>
      <td>
        <button
          onClick={deleteUser}
          className="btn bg-red-600 border-red-600 text-white rounded-full"
        >
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default AllUser;
