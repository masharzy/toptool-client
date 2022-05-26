import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loader from "../../Shared/Loader/Loader";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const { data: userInfo, isLoading } = useQuery("getUser", () =>
    fetch(`http://localhost:5000/user/${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("accessToken");
        signOut(auth);
        navigate("/");
      }
      return res.json();
    })
  );

  if (loading || isLoading) {
    return <Loader />;
  }
  const { education, linkedIn, location, phone } = userInfo;

  return (
    <div className="container mx-auto">
      <div className="flex header justify-between mb-5 px-5 lg:px-20">
        <h1 className="text-2xl font-semibold">My Profile</h1>
        <Link
          to="editProfile"
          className="text-lg text-primary font-semibold link link-hover"
        >
          <FontAwesomeIcon className="mr-1 text-sm" icon={faPencilAlt} />
          Edit
        </Link>
      </div>
      <div className="divider"></div>
      <div className="profile-information">
        <div className="flex px-5 lg:px-20 justify-center items-center">
          <div className="profile-image">
            <img
              className="rounded-full w-32 h-32 object-cover mx-auto"
              src={user?.photoURL}
              alt="profile"
            />
            <Link
              to="editProfile"
              className="btn btn-primary rounded-full text-white px-10 mt-3"
            >
              Edit Profile
            </Link>
          </div>
          <div className="profile-infos text-left lg:ml-10">
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
            {education && (
              <div className="info mb-3">
                <span class="label-text text-sm font-bold text-[#646464]">
                  Education:
                </span>
                <h4 className="text-lg">{education}</h4>
              </div>
            )}
            {location && (
              <div className="info mb-3">
                <span class="label-text text-sm font-bold text-[#646464]">
                  Location:
                </span>
                <h4 className="text-lg">{location}</h4>
              </div>
            )}
            {phone && (
              <div className="info mb-3">
                <span class="label-text text-sm font-bold text-[#646464]">
                  Phone:
                </span>
                <h4 className="text-lg">{phone}</h4>
              </div>
            )}
            {linkedIn && (
              <div className="info mb-3">
                <span class="label-text text-sm font-bold text-[#646464]">
                  Linked In:
                </span>
                <h4 className="text-lg">{linkedIn}</h4>
              </div>
            )}
            <div className="info mb-3">
              <Link
                to="myProfile/addMoreInfo"
                className="text-lg link link-hover font-bold text-primary"
              >
                Add More Information
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
