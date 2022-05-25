import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import Loader from "../../Shared/Loader/Loader";

const EditProfile = () => {
  const [user, loading] = useAuthState(auth);
  const [changes, setChanges] = useState({
    name: user?.displayName,
    email: user?.email,
    photo: user?.photoURL,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    photo: "",
  });
  const [] = useForm()
  const handleEditProfile = (e) => {
    e.preventDefault();
    const { name, email } = changes;
    console.log(changes);
    const photo = e.target.photo.value;
    console.log(photo);
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="profile-information">
      <div className="flex px-5 lg:px-20 justify-center items-center">
        {/* <div className="profile-image">
          <img
            className="rounded-full w-32 h-32 object-cover mx-auto"
            src={user?.photoURL}
            alt="profile"
          />
        </div> */}
        <div className="profile-infos text-left lg:ml-10 w-full">
          <form onSubmit={handleEditProfile}>
            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                id="name"
                className="input input-bordered"
                value={changes.name}
                onChange={(e) => {
                  if (e.target.value.length === "") {
                    setErrors({ ...errors, name: "Name is required" });
                  } else {
                    setErrors({ ...errors, name: "" });
                    setChanges({ ...changes, name: e.target.value });
                  }
                }}
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email (Email can't change)</span>
              </label>
              <input
                type="text"
                id="email"
                disabled
                className="input input-bordered"
                value={changes.email}
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="photo">
                <span className="label-text">Profile Picture</span>
              </label>
              <div className="grid lg:grid-cols-12 grid-cols-1 items-center ">
                <div className="col-span-1">
                  <img
                    className="object-cover w-16 h-16 rounded-full mb-2"
                    src={user?.photoURL}
                    alt="profile"
                  />
                </div>
                <label className="block lg:col-span-11">
                  <span className="sr-only">Choose File</span>
                  <input
                    id="photo"
                    name="photo"
                    type="file"
                    className="pt-1 cursor-pointer text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer input input-bordered w-full"
                    // onChange={(e) => {
                    //   console.log(e.target.value);
                    //   console.log(e.target);
                    //   console.log(e);
                    // }}
                  />
                </label>
              </div>
            </div>
            <div className="form-control mt-5">
              <button
                disabled={
                  changes.name === "" || changes.name === user?.displayName
                }
                className="btn btn-primary text-white"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
