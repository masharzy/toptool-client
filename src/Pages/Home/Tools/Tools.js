import React from "react";
import { useQuery } from "react-query";
import Loader from "../../Shared/Loader/Loader";
import Tool from "../Tool/Tool";

const Tools = () => {
  const { data: tools, isLoading } = useQuery("tools", () =>
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
    <div className="container lg:px-20 p-0 mx-auto mt-20">
      <h2 className="font-bold text-center relative text-5xl text-primary after:w-36 after:bg-info after:h-1 after:absolute after:-bottom-2 after:left-0 after:right-0 after:mx-auto inline-block">
        Featured Tools
      </h2>
      <div className="grid grid-cols-3 mt-10 gap-x-5">
        {tools && tools?.map((tool) => <Tool key={tool._id} tool={tool} />)}
      </div>
    </div>
  );
};

export default Tools;
