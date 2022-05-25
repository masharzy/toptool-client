import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loader from "../../Shared/Loader/Loader";

const EditProfile = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
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
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    if (changes.name === user?.displayName) {
      setButtonDisabled(true);
    }else{
        setButtonDisabled(false);
    }
  }, [changes.name, user]);
  const onSubmit = async (data) => {
    const { name, email, photo } = changes;
    console.log(name);
    await updateProfile({ displayName: name });
    toast("Profile updated successfully", { type: "success" });
    console.log(user?.displayName);
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
            await updateProfile({ photoURL: res.data.data.url });
          };
          updatePhotoUrl();
        }
      });
    }
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
