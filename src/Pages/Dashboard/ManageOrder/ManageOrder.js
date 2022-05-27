import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const ManageOrder = ({ order, index, refetch }) => {
  const {
    _id,
    email,
    toolName,
    price,
    quantity,
    phone,
    paid,
    transactionId,
    status,
  } = order;
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
          .delete(
            `https://evening-everglades-24047.herokuapp.com/order/${id}`,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            }
          )
          .then((res) => {
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
  const handleChangeStatus = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`https://evening-everglades-24047.herokuapp.com/unpaid/${id}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire("Status Changes!", res.data.message, "success");
              refetch();
            } else {
              Swal.fire("Error!", res.data.message, "error");
            }
          });
      }
    });
  };
  const handleShipped = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`https://evening-everglades-24047.herokuapp.com/shipped/${id}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire("Status Changes!", res.data.message, "success");
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
      <td>{quantity * price}</td>
      <td>
        {price && !paid ? (
          <p className="font-bold text-error">Unpaid</p>
        ) : (
          <>
            <p className="text-success font-bold">PAID</p>
            {status === "shipped" ? (
              ""
            ) : (
              <button
                onClick={() => handleChangeStatus(_id)}
                className="btn btn-primary text-white"
                disabled={paid && status === "Shipped" ? true : false}
              >
                Change To Unpaid
              </button>
            )}
          </>
        )}
      </td>
      <td>
        {status === "pending" && (
          <>
            <p className="text-warning font-bold">Pending</p>
            <button
              onClick={() => handleShipped(_id)}
              className="btn btn-success text-white"
            >
              Shipped
            </button>
          </>
        )}
        {status === "shipped" && (
          <>
            <p className="text-success font-bold">Shipped</p>
          </>
        )}
      </td>
      <td>
        <button
          onClick={() => handleOrderDelete(_id)}
          className="btn btn-warning"
        >
          Cancel Order
        </button>
      </td>
    </tr>
  );
};

export default ManageOrder;
