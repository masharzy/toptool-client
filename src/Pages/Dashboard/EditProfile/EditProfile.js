import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import Loader from "../../Shared/Loader/Loader";

const EditProfile = () => {
  const [user, loading] = useAuthState(auth);
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
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              id="name"
              className="input input-bordered"
              defaultValue={user?.displayName}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              id="email"
              className="input input-bordered"
              defaultValue={user?.email}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="photo">
              <span className="label-text">Profile Picture</span>
            </label>
            <div className="lg:grid lg:grid-cols-12 items-center grid-col-2">
              <div>
                <img
                  className="object-cover w-16 h-16 rounded-full"
                  src={user?.photoURL}
                  alt="profile"
                />
              </div>
              <label className="block lg:col-span-11">
                <span className="sr-only">Choose File</span>
                <input
                  id="photo"
                  type="file"
                  className="pt-1 cursor-pointer text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer input input-bordered"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
