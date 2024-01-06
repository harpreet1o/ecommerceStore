import React from "react";
import footerLogo from "../assets/logo_big.png";
import intagramIcon from "../assets/instagram_icon.png";
import pintesterIcon from "../assets/pintester_icon.png";
import whatsappIcon from "../assets/whatsapp_icon.png";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <div className="flex items-center gap-5">
        <img src={footerLogo} alt="" />
        <p className="text-gray-700 font-3xl font-bold">SHOPPER</p>
      </div>
      <ul className="flex list-none gap-16 text-gray-800 ">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-20 ">
        <div className="p-2 pb-1 bg-white border-solid border-2 border-gray-100 ">
          <img src={intagramIcon} alt="" />
        </div>
        <div>
          <img
            className="p-2 pb-1 bg-white border-solid border-2 border-gray-100"
            src={pintesterIcon}
            alt=""
          />
        </div>
        <div className="p-2 pb-1 bg-white border-solid border-2 border-gray-100">
          <img src={whatsappIcon} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-7 w-full mb-7 text-gray-900 ">
        <hr className="w-4/5 border-none rounded-xl bg-gray-100 h-1" />
        <p>Copyright @2023 - All Rights Reserved</p>
      </div>
    </div>
  );
};
