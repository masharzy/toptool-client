import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import Loader from "../../Shared/Loader/Loader";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto">
      <div className="flex header justify-between mb-5 px-5 lg:px-20">
        <h1 className="text-2xl font-semibold">My Profile</h1>
        <Link to='editProfile' className="text-lg text-primary font-semibold link link-hover">
          <FontAwesomeIcon className="mr-1 text-sm" icon={faPencilAlt} />
          Edit
        </Link>
      </div>
      <div className="divider"></div>
      <div className="profile-information">
        <div className="flex px-5 lg:px-20 justify-center">
          <div className="profile-image">
            <img
              className="rounded-full w-32 h-32 object-cover mx-auto"
              src={user?.photoURL}
              alt="profile"
            />
            <Link to='editProfile' className="btn btn-primary rounded-full text-white px-10 mt-3">
              Edit Profile
            </Link>
          </div>
          <div className="profile-infos text-left lg:ml-10">
            <div className="info mb-3">
              <span class="mb-1 label-text text-sm font-bold text-[#646464]">
                Role:
              </span>
              <h4 className="text-lg">{user?.displayName}</h4>
            </div>
            <div className="info mb-3">
              <span class="label-text text-sm font-bold text-[#646464]">
                Name:
              </span>
              <h4 className="text-lg">{user?.displayName}</h4>
            </div>
            <div className="info mb-3">
              <span class="label-text text-sm font-bold text-[#646464]">
                Email Address:
              </span>
              <h4 className="text-lg">{user?.email}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
