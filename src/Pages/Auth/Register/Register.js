import axios from "axios";
import React, { useEffect } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const Register = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    const image = data.pp[0];
    const imageStorageKey = "25f8fd66fcd0b291d11ff45ad0f16374";
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    const formData = new FormData();
    formData.append("image", image);
    await axios.post(url, formData).then((res) => {
      console.log(res);
      if (res.data.success) {
        const updatePhotoUrl = async () => {
          await updateProfile({ photoURL: res.data.data.url });
        };
        updatePhotoUrl();
      }
    });
  };
  useEffect(() => {
    if (emailError || googleError || updateError) {
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
          .join(" ") ||
        updateError?.message;

      toast.error(newErrorMessage.toUpperCase());
    }
  }, [emailError, googleError, updateError]);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user, navigate, from]);

  return (
    <div className="py-20">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100 mx-auto">
        <div className="card-title justify-center mt-6 -mb-5">
          <h1>Register</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text">Name</span>
              </label>
              <input
                id="name"
                type="text"
                className="input input-bordered"
                {...register("name", {
                  required: true,
                  maxLength: 30,
                  minLength: 3,
                })}
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600 text-left font-semibold">
                  Name is required
                </p>
              )}
              {errors.name?.type === "maxLength" && (
                <p className="text-red-600 text-left font-semibold">
                  Name can not be greater than 30 characters
                </p>
              )}
              {errors.name?.type === "minLength" && (
                <p className="text-red-600 text-left font-semibold">
                  Name must be greater than 3 characters
                </p>
              )}
            </div>
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
                <p className="text-red-600 text-left font-semibold">
                  Email is required
                </p>
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
            </div>
            <div className="form-control">
              <label className="label" htmlFor="pp">
                <span className="label-text">Profile Picture</span>
              </label>
              <label class="block">
                <span class="sr-only">Choose File</span>
                <input
                  type="file"
                  id="pp"
                  class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 input input-bordered pt-[5px]"
                  {...register("pp", { required: true })}
                />
              </label>
              {errors.pp?.type === "required" && (
                <p className="text-red-600 text-left font-semibold">
                  Profile Picture is required
                </p>
              )}
            </div>
            <div className="form-control mt-3">
              <button
                disabled={emailLoading ? true : false}
                className={`btn btn-primary text-white ${
                  emailLoading ? "loading" : ""
                }`}
              >
                Register
              </button>
            </div>
          </form>
          <p className="text-sm text-center">
            Already have an accout?{" "}
            <Link to="/login" className="text-accent">
              Login
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

export default Register;
