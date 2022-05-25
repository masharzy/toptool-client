
import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
      <Link
        // style={{backgroundColor: match ? "#31B2EE" : "white", color: match ? "white" : "#000000"}}
        className={match ? "btn btn-primary text-white hover:btn-info hover:text-white mx-1" : "btn btn-ghost mx-1"}
        to={to}
        {...props}
      >
        {children}
      </Link>
  );
};

export default CustomLink;
