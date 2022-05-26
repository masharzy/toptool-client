import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { set, useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loader from "../../Shared/Loader/Loader";

const EditProfile = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
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
        Navigate("/");
      }
      return res.json();
    })
  );
  const [changes, setChanges] = useState({
    name: user?.displayName,
    email: user?.email,
    photo: user?.photoURL,
    education: "",
    location: "",
    phone: "",
    linkedIn: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    photo: "",
  });
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    if (changes.name === user?.displayName) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [changes.name, user]);
  const onSubmit = async (data, e) => {
    e.preventDefault();
    const education = e.target?.education?.value;
    const location = e.target?.location?.value;
    const phone = e.target?.phone?.value;
    const linkedIn = e.target?.linkedIn?.value;
    const moreInfo = {
      education,
      location,
      phone,
      linkedIn,
    };
    await axios
      .put(`http://localhost:5000/user/${user.email}`, moreInfo, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Profile Updated Successfully");
        }
      });
    const { name } = changes;
    await updateProfile({ displayName: name });
    toast("Profile updated successfully", { type: "success" });
    const image = data.photo[0];
    if (image) {
      const imageStorageKey = "25f8fd66fcd0b291d11ff45ad0f16374";
      const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
      const formData = new FormData();
      formData.append("image", image);
      await axios.post(url, formData).then((res) => {
        console.log(res);
        if (res.data.success) {
          const updatePhotoUrl = async () => {
            const photoUrl = res.data.data.url;
            await updateProfile({ photoURL: photoUrl });
            setChanges({ ...changes, photo: photoUrl });
          };
          updatePhotoUrl();
        }
      });
    }
  };
  if (loading || isLoading) {
    return <Loader />;
  }
  const { education, linkedIn, location, phone } = userInfo;
  console.log(changes);
  return (
    <div className="profile-information">
      <h4 className="text-2xl font-bold">Edit Profile</h4>
      <div className="flex px-5 lg:px-20 justify-center items-center">
        <div className="profile-infos text-left lg:ml-10 w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
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
            {education && (
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Education</span>
                </label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  className="input input-bordered"
                  defaultValue={education}
                  onChange={(e) => {
                    setChanges({ ...changes, education: e.target.value });
                    setButtonDisabled(false);
                  }}
                />
              </div>
            )}
            {location && (
              <div className="form-control">
                <label className="label" htmlFor="location">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="input input-bordered"
                  defaultValue={location}
                  onChange={(e) => {
                    setChanges({ ...changes, location: e.target.value });
                    setButtonDisabled(false);
                  }}
                />
              </div>
            )}
            {phone && (
              <div className="form-control">
                <label className="label" htmlFor="phone">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="input input-bordered"
                  defaultValue={phone}
                  onChange={(e) => {
                    setChanges({ ...changes, phone: e.target.value });
                    setButtonDisabled(false);
                  }}
                />
              </div>
            )}
            {linkedIn && (
              <div className="form-control">
                <label className="label" htmlFor="linkedIn">
                  <span className="label-text">Linked In</span>
                </label>
                <input
                  type="text"
                  id="linkedIn"
                  name="linkedIn"
                  className="input input-bordered"
                  defaultValue={linkedIn}
                  onChange={(e) => {
                    setChanges({ ...changes, linkedIn: e.target.value });
                    setButtonDisabled(false);
                  }}
                />
              </div>
            )}
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
                    {...register("photo")}
                    onChange={() => setButtonDisabled(false)}
                  />
                </label>
              </div>
            </div>
            <div className="form-control mt-5">
              <button
                disabled={buttonDisabled}
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
