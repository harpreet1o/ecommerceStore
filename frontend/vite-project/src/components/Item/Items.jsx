import React from "react";

export const Items = (props) => {
  return (
    <div className="w-84  hover:scale-105 hover:duration-700">
      <img src={props.image} alt="" />
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
