import React from "react";

export const LoginSignup = () => {
  return (
    <div className="w-full h-4/5 bg-pink-50 pt-20">
      <div className="w-580 h-600 bg-white m-auto px-16 py-10  ">
        <h1 className="my-5 text-bold text-3xl">Sign Up</h1>
        <div className="flex flex-col gap-7 mt-7">
          <input
            type="text"
            placeholder="Your Name"
            className="h-16 w-full pl-5 border-solid border-2 border-gray-100 outline-none text-gray-500"
          />
          <input
            type="Email"
            placeholder="Your EmailAddress"
            className="h-16 w-full pl-5 border-solid border-2 border-gray-100 outline-none text-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="h-16 w-full pl-5 border-solid border-2 border-gray-100 outline-none text-gray-500"
          />
        </div>
        <button className="w-full h-16 text-white bg-red-500 mt-7 border-none text-2xl text-medium cursor-pointer">
          Continue
        </button>
        <p className="mt-5 text-medium text-gray-500">
          Already have an account?
          <span className="text-red-500 text-semibold">Login here</span>
        </p>
        <div className="flex items-center mt-6 gap-5 text-gray-500 text-medium">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of the signup policy</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};
