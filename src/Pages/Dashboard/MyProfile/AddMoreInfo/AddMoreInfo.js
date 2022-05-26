import axios from "axios";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../../firebase.init";
import Loader from "../../../Shared/Loader/Loader";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

const AddMoreInfo = () => {
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
  if (loading) {
    return <Loader />;
  }
  const handleAddInfo = (e) => {
    e.preventDefault();
    const education = e.target.education.value;
    const location = e.target.location.value;
    const phone = e.target.phone.value;
    const linkedIn = e.target.linkedIn.value;

    const moreInfo = {
      education,
      location,
      phone,
      linkedIn,
    };
    console.log(moreInfo);
    axios
      .put(`http://localhost:5000/user/${user?.email}`, moreInfo, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem("accessToken");
          signOut(auth);
          navigate("/login");
        } else {
          Swal.fire({
            icon: "success",
            title: "Added More Info",
            text: "Your information has been added",
          });
        }
      });
  };

  return (
    <div className="add-information">
      <h2 className="text-2xl font-bold">Add Information</h2>
      <div className="flex px-5 lg:px-20 justify-center items-center">
        <form className="w-full lg:w-96" onSubmit={handleAddInfo}>
          <div className="form-control">
            <label className="label" htmlFor="education">
              <span className="label-text">Education</span>
            </label>
            <input
              defaultValue={education && education}
              type="text"
              id="education"
              name="education"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="location">
              <span className="label-text">Location</span>
            </label>
            <input
              defaultValue={location && location}
              name="location"
              type="text"
              id="location"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="phone">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              defaultValue={phone && phone}
              name="phone"
              type="number"
              id="phone"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="linkedIn">
              <span className="label-text">LinkedIn Profile Link</span>
            </label>
            <input
              defaultValue={linkedIn && linkedIn}
              name="linkedIn"
              type="text"
              id="linkedIn"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="submit"
              value="Submit"
              id="submit"
              className="mt-5 btn btn-primary text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMoreInfo;
