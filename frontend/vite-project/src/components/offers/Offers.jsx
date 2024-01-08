import React from "react";
import exclusiveImage from "../assets/exclusive_image.png";
export const Offers = () => {
  return (
    <div className="w-5/6 h-4/6 m-auto px-32 mb-32 bg-gradient-to-b from-red-200 to-white flex">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-slate-700 text-5xl font-semibold">Exclusive</h1>
        <h1 className="text-slate-700 text-5xl font-semibold">
          Offers for You
        </h1>
        <p className="text-slate-700 text-2xl font-semibold">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-72 h-16 rounded-3xl bg-red-400 border-none text-white text-2xl font-medium mt-7 cursor-pointer">
          Check Now
        </button>
      </div>
      <div className="flex flex-1 items-center justify-end pt-12">
        <img src={exclusiveImage} alt="" />
      </div>
    </div>
  );
};
