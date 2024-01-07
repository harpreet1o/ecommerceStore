import React from "react";
import arrowIcon from "../assets/breadcrum_arrow.png";

export const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="flex">
      HOME <img src={arrowIcon} alt="" /> Shop <img src={arrowIcon} alt="" />
      {product.category} <img src={arrowIcon} alt="" />
      {product.name}
    </div>
  );
};
