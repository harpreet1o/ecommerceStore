import React from "react";
import { Link } from "react-router-dom";
export const Items = (props) => {
  return (
    <div className="w-84  hover:scale-105 hover:duration-700">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <p className=" my-2">{props.name}</p>
      <div className="flex gap-5">
        <div className="text-gray-600 text-lg font-semibold ">
          ${props.new_price}
        </div>
        <div className="text-gray-400 text-lg font-medium line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};
