import axios from "axios";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loader from "../../Shared/Loader/Loader";
import Swal from "sweetalert2";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    data.name = user.displayName;
    const review = {
      ...data,
      email: user.email,
    };
    await axios
      .post("http://localhost:5000/review", review, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem("accessToken");
          signOut(auth);
          navigate("/login");
        } else {
          Swal.fire({
            icon: "success",
            title: "Review Submitted",
            text: "Thank you for your review",
          });
          e.target.reset();
        }
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="px-5 lg:px-20">
      <div class="card flex-shrink-0 w-2/3 mx-auto shadow-2xl bg-base-100">
        <h1 className="text-left text-2xl font-bold mt-5 ml-8 -mb-5">
          Add Review
        </h1>
        <div class="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Your Name</span>
              </label>
              <input
                value={user?.displayName}
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                disabled
                {...register("name")}
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                className="input input-bordered"
                {...register("rating", {
                  required: true,
                  min: 1,
                  max: 5,
                  type: "number",
                  valueAsNumber: true,
                })}
              />
            </div>
            {errors.rating?.type === "required" && (
              <p className="text-red-600 text-left font-semibold">
                Rating is required
              </p>
            )}
            {errors.rating?.type === "min" && (
              <p className="text-red-600 text-left font-semibold">
                Rating can not be 0
              </p>
            )}
            {errors.rating?.type === "max" && (
              <p className="text-red-600 text-left font-semibold">
                Rating can not be greater than 5
              </p>
            )}
            <div class="form-control">
              <label class="label">
                <span class="label-text">Review Text</span>
              </label>
              <textarea
                class="textarea textarea-bordered h-24"
                placeholder="Review Text"
                {...register("ratingText", {
                  required: true,
                  minLength: 10,
                })}
              ></textarea>
              {errors.ratingText?.type === "required" && (
                <p className="text-red-600 text-left font-semibold">
                  Rating Text is required
                </p>
              )}
              {errors.ratingText?.type === "minLength" && (
                <p className="text-red-600 text-left font-semibold">
                  Rating Text Must be Greater Than 10 Characters
                </p>
              )}
            </div>
            <div className="form-control">
              <input
                className="btn btn-primary mt-5 text-white"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
