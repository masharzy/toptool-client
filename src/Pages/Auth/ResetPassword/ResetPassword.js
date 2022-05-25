import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const onSubmit = async (data) => {
    await sendPasswordResetEmail(data.email);
    if (error) {
      toast.error(error.message.toUpperCase());
    }
    toast.success("Email sent successfully");
  };
  return (
    <div className="flex h-[90vh] items-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100 mx-auto">
        <div className="card-title justify-center mt-6 -mb-5">
          <h1>Reset Your Password</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                type="text"
                className="input input-bordered"
                {...register("email", {
                  required: true,
                  pattern: /^(.+)@(.+)$/,
                })}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600 text-left font-semibold">Email is required</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-red-600 text-left font-semibold">
                  Please Enter a valid email
                </p>
              )}
            </div>
            <div className="form-control mt-3">
              <button
                disabled={sending ? true : false}
                className={`btn btn-primary text-white no-animation ${
                  sending ? "loading" : ""
                }`}
              >
                Send Reset Link
              </button>
            </div>
          </form>
          <p className="text-sm text-center">
            <Link to="/login" className="text-accent">
              Back to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
