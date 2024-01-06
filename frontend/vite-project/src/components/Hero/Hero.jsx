import React from "react";
import handIcon from "../assets/hand_icon.png";
import arrowIcon from "../assets/arrow.png";
import heroImage from "../assets/hero_image.png";
export const Hero = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-red-200 to-white flex">
      <div className="flex-1 flex flex-col justify-center items-start gap-5 pl-44 leading-none">
        <h2 className="text-gray-800 text-2xl font-semibold">
          New Arrivals only
        </h2>

        <div className="flex flex-col items-start gap-5">
          {/* <div className="flex items-center"> */}
          <p className="text-gray-700 font-bold text-5xl">new</p>
          <img src={handIcon} className="w-24" />
        </div>
        <p className="text-gray-700 font-bold text-5xl">collections</p>
        <p className="text-gray-700 font-bold text-5xl">for everyone</p>
        {/* </div> */}

        <div className="flex justify-center items-center gap-5 w-60 h-16 rounded-3xl my-7 bg-red-500 text-white text-xl font-medium">
          <div>Latest Collection</div>
          <img src={arrowIcon} alt="" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center ">
        <img src={heroImage} alt="" className="h-full" />
      </div>
    </div>
  );
};
