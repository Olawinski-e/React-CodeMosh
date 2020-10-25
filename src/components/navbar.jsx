import React from "react";

const Navbar = ({ totalCounters }) => {
  console.log("navbar - render");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Navbar
        <span className="badge badge-pill badge-warning ml-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
