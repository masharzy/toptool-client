import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const MyOrder = ({ myOrder, index, refetch }) => {
  const { _id, email, toolName, price, quantity, phone, paid, transactionId } =
    myOrder;
  const handleOrderDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/order/${id}`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then((res) => {
            console.log(res);
            if (res.data.deletedCount > 0) {
              Swal.fire("Canceled!", res.data.message, "success");
              refetch();
            } else {
              Swal.fire("Error!", res.data.message, "error");
            }
          });
      }
    });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{email}</td>
      <td>{toolName}</td>
      <td>{quantity}</td>
      <td>{quantity * price}</td>
      <td>{phone}</td>
      <td>
        {price && !paid ? (
          <Link
            className="bg-secondary text-white  px-10 rounded-full py-3"
            to={`/dashboard/payment/${_id}`}
          >
            Pay
          </Link>
        ) : (
          <>
            <p className="text-success font-bold">PAID</p>
            <p>
              Transaction ID:
              <p className="text-accent">{transactionId && transactionId}</p>
            </p>
          </>
        )}
      </td>
      <td>
        <button
          onClick={() => handleOrderDelete(_id)}
          disabled={paid ? true : false}
          className="btn btn-warning"
        >
          Cancel Order
        </button>
      </td>
    </tr>
  );
};

export default MyOrder;
