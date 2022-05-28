import React from "react";
import { useQuery } from "react-query";
import Loader from "../../Shared/Loader/Loader";
import ManageProduct from "../ManageProduct/ManageProduct";

const ManageProducts = () => {
  const { data: tools, isLoading, refetch } = useQuery("tools", () =>
    fetch("https://evening-everglades-24047.herokuapp.com/tools", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="container lg:px-20 px-5 mx-auto mt-20">
      <h2 className="font-bold text-center relative text-5xl text-primary after:w-36 after:bg-info after:h-1 after:absolute after:-bottom-2 after:left-0 after:right-0 after:mx-auto inline-block">
        All Tools
      </h2>
      <div className="grid lg:grid-cols-3 mt-10 gap-5">
        {tools && tools?.map((tool) => <ManageProduct key={tool._id} refetch={refetch} tool={tool} />)}
      </div>
    </div>
  );
};

export default ManageProducts;
