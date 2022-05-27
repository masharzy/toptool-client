import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loader from "../../Shared/Loader/Loader";
import Review from "../Review/Review";

const Reviews = () => {
  const navigate = useNavigate();
  const { data: reviews, isLoading } = useQuery("reviews", async () =>
    fetch("https://evening-everglades-24047.herokuapp.com/reviews", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("accessToken");
        signOut(auth);
        navigate("/login");
      }
      return res.json();
    })
  );
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto my-10">
      <div className="font-bold text-center relative after:w-64 after:bg-primary after:h-1 after:absolute after:-bottom-2 after:left-0 after:right-0 after:mx-auto ">
        <h2 className="text-5xl text-primary">Reviews</h2>
        <span className="block">What out customers says</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:space-x-5 mt-10">
        {reviews?.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
