import React from "react";
import Navlogo from "../../assets/nav-logo.svg";
import NavProfile from "../../assets/nav-profile.svg";
export const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-12 py-3  shadow-sm shadow-black mb-1 bg-white">
      <img src={Navlogo} alt="" className="w-50 " />
      <img src={NavProfile} alt="" className="20"></img>
    </div>
  );
};
