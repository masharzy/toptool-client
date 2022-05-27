import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const ManageProduct = ({ tool, refetch }) => {
  const {
    _id,
    toolName,
    toolImage,
    toolDescription,
    toolMinimumOrderQuantity,
    toolAvailableQuantity,
    toolPrice,
  } = tool;
  const handleDeleteTool = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        axios
          .delete(`https://evening-everglades-24047.herokuapp.com/tool/${id}`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then((res) => {
            if (res.status === 200) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            } else {
              Swal.fire("Error!", "Something went wrong!", "error");
            }
          });
      }
    });
  };
  return (
    <div className="tool card border hover:shadow-xl hover:scale-105 transition-all duration-700">
      <div className="tool-image">
        <img src={toolImage} alt="TopTool" />
      </div>
      <div className="card-body px-5 text-left pb-5 pt-5">
        <h4 className="tool-name text-lg font-bold ">{toolName}</h4>
        <p>{toolDescription}</p>
        <span className="font-semibold">
          Minimum Order Quantity: {toolMinimumOrderQuantity}
        </span>
        <span className="font-semibold">
          Available Quantity: {toolAvailableQuantity}
        </span>
        <span className="font-semibold">Price (Per Unit): ${toolPrice}</span>
        <button
          onClick={() => handleDeleteTool(_id)}
          className="btn btn-primary text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ManageProduct;
