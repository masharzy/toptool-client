import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddTool = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    const image = data.toolImage[0];
    const imageStorageKey = "25f8fd66fcd0b291d11ff45ad0f16374";
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    const formData = new FormData();
    formData.append("image", image);
    await axios.post(url, formData).then((res) => {
      const toolImage = res.data.data.url;
      if (res.data.success) {
        const toolInfo = {
          toolName: data.toolName,
          toolDescription: data.toolDescription,
          toolImage,
          toolMinimumOrderQuantity: data.toolMinimumOrderQuantity,
          toolAvailableQuantity: data.toolAvailableQuantity,
          toolPrice: data.toolPrice,
        };
        axios
          .post("https://evening-everglades-24047.herokuapp.com/tool", toolInfo, {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then((res) => {
            if (res.status === 200) {
              Swal.fire({
                icon: "success",
                title: "Tool Added",
                text: "Tool has been added to the database",
              });
              e.target.reset();
            }
          });
      }
    });
  };

  return (
    <div className="px-5 lg:px-20">
      <div class="card flex-shrink-0 lg:w-2/3 mx-auto shadow-2xl bg-base-100">
        <h1 className="text-left text-2xl font-bold mt-5 ml-8 -mb-5">
          Add Tool
        </h1>
        <div class="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                {...register("toolName", { required: true, minLength: 5 })}
              />
              {errors.toolName?.type === "required" && (
                <p className="text-red-600 text-left font-semibold">
                  Name is required
                </p>
              )}
              {errors.toolName?.type === "minLength" && (
                <p className="text-red-600 text-left font-semibold">
                  Name must be at least 5 characters
                </p>
              )}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Price</span>
              </label>
              <input
                type="number"
                className="input input-bordered"
                {...register("toolPrice", { required: true })}
              />
              {errors.toolPrice?.type === "required" && (
                <p className="text-red-600 text-left font-semibold">
                  Price is required
                </p>
              )}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Image</span>
              </label>
              <input
                type="file"
                className="pt-1 input input-bordered block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer"
                {...register("toolImage", { required: true })}
              />
              {errors.toolImage?.type === "required" && (
                <p className="text-red-600 text-left font-semibold">
                  Image is required
                </p>
              )}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Minimum Order Quantity</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                {...register("toolMinimumOrderQuantity", { required: true })}
              />
              {errors.toolMinimumOrderQuantity?.type === "required" && (
                <p className="text-red-600 text-left font-semibold">
                  Minimum Order Quantity is required
                </p>
              )}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Tool Available Quantity</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                {...register("toolAvailableQuantity", { required: true })}
              />
              {errors.toolAvailableQuantity?.type === "required" && (
                <p className="text-red-600 text-left font-semibold">
                  Tool Available Quantity is required
                </p>
              )}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Description</span>
              </label>
              <textarea
                type="text"
                className="textarea textarea-bordered"
                {...register("toolDescription", { required: true })}
              />
              {errors.toolDescription?.type === "required" && (
                <p className="text-red-600 text-left font-semibold">
                  Tool Description is required
                </p>
              )}
            </div>
            <div className="form-control">
              <input
                className="btn btn-primary mt-5 text-white"
                type="submit"
                value="Add Tool"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTool;
