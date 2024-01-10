import React from "react";
import { Link } from "react-router-dom";
import addProduct from "../../assets/Product_Cart.svg";
import listProduct from "../../assets/Product_list_icon.svg";
export const Sidebar = () => {
  return (
    <div className="flex flex-col pt-7 gap-5 w-full max-w-60 h-screen bg-white">
      <Link to={"/addProduct"}>
        <div className="flex items-center justify-center mx-5 py-1 px-3b rounded-sm bg-slate-50 gap-5 cursor-pointer ">
          <img src={addProduct} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/listProduct"}>
        <div className="flex items-center justify-center mx-5 py-1 px-3b rounded-sm bg-slate-50 gap-5 cursor-pointer ">
          <img src={listProduct} alt="" />
          <p>Products List</p>
        </div>
      </Link>
    </div>
  );
};
