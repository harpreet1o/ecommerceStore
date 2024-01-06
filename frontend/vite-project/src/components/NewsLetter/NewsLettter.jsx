import React from "react";

export const NewsLettter = () => {
  return (
    <div className="w-4/6 h-2/5 flex flex-col items-center justify-center m-auto p-20 mb-40 bg-gradient-to-b from-red-200 to-white gap-7">
      <h1 className="text-slate-500 text-4xl text-semibold">
        {" "}
        Get Exclusive Ofers On Your Email
      </h1>
      <p className="text-slate-500 text-2xl">
        Subscribe to our newletter and stay updated
      </p>
      <div className="flex items-center justify-between bg-white w-700 h-16 rounded-3xl border-solid border-2 border-stone-50 ">
        <input
          type="email"
          placeholder="Your Email Id"
          className="w-96 ml-7 border-none outline-none text-slate-600 "
        />
        <button className="w-52 h-16 rounded-3xl bg-black text-white cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};
