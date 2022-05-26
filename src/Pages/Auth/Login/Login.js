import React, { useEffect } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";

const Login = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  useEffect(() => {
    if (googleError || emailError) {
      const newErrorMessage =
        googleError?.message
          .split("Firebase: Error (auth/")
          .join("")
          .split(").")
          .join("")
          .split("-")
          .join(" ") ||
        emailError?.message
          .split("Firebase: Error (auth/")
          .join("")
          .split(").")
          .join("")
          .split("-")
          .join(" ");
      toast.error(newErrorMessage.toUpperCase());
    }
  }, [emailError, googleError]);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      navigate(from);
    }
  }, [token, navigate, from]);

  return (
    <div className="py-20">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100 mx-auto">
        <div className="card-title justify-center mt-6 -mb-5">
          <h1>Login</h1>
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
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                id="password"
                className="input input-bordered"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600 text-left font-semibold">
                  Password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600 text-left font-semibold">
                  Password must be at least 6 characters
                </p>
              )}
              <label className="label">
                <Link
                  to="/reset-password"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control">
              <button
                disabled={emailLoading ? true : false}
                className={
                  emailLoading
                    ? "btn btn-primary text-white loading no-animation"
                    : "btn btn-primary text-white no-animation"
                }
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-sm text-center">
            New to TOPTOOL?{" "}
            <Link to="/register" className="text-accent">
              Create new account
            </Link>
          </p>
          <div className="flex flex-col w-full border-opacity-10">
            <div className="divider">OR</div>
          </div>
          <button
            disabled={googleLoading ? true : false}
            className={`btn btn-ghost py-3 rounded-md border-black border-[1px] no-animation ${
              googleLoading ? "loading" : ""
            }`}
            onClick={() => signInWithGoogle()}
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
