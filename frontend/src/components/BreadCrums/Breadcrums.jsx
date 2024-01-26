import React from "react";
import arrowIcon from "../assets/breadcrum_arrow.png";

export const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="flex items-center gap-2 text-gray-500 font-semibold my-16 mx-40 capatalize">
      HOME <img src={arrowIcon} alt="" /> Shop <img src={arrowIcon} alt="" />
      {product.category} <img src={arrowIcon} alt="" />
      {product.name}
    </div>
  );
};
