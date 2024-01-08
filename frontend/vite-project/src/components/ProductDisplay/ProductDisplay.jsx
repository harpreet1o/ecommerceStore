import React, { useContext } from "react";
import starIcon from "../assets/star_icon.png";
import stardullIcon from "../assets/star_dull_icon.png";
import { ShopCategory } from "../../Pages/ShopCategory";
import { ShopContext } from "../../Context/ShopContext";

export const ProductDisplay = (props) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="flex mx-40">
      <div className="flex gap-16">
        <div className="flex flex-col gap-4">
          <img src={props.product.image} alt="" className="h-40" />
          <img src={props.product.image} alt="" className="h-40" />
          <img src={props.product.image} alt="" className="h-40" />
          <img src={props.product.image} alt="" className="h-40" />
          <img src={props.product.image} alt="" className="h-40" />
        </div>

        <div>
          <img src={props.product.image} alt="" className=" w-auto h-full" />
        </div>
      </div>
      <div className="mx-16 flex flex-col">
        <h1 className="text-gray-500 text-3xl font-semibold">
          {props.product.name}
        </h1>
        <div className="flex items-center mt-3 gap-1 text-gray-900 ">
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={stardullIcon} alt="" />
          <p>(122)</p>
        </div>
        <div className="flex my-10 gap-7 font-semibold">
          <div className="text-gray-300 line-through">
            ${props.product.old_price}
          </div>
          <div className="text-red-500">${props.product.new_price}</div>
        </div>
        <div>hi this is me Jose Mouriniho </div>
        <div>
          <h1 className="mt-12 text-gray-300 font-semibold">Select Size</h1>
          <div className="flex my-7 gap-5">
            <div className="px-6 py-5 bg-slate-50 border-solid border-1 border-slate-100 rounded-xl cursor-pointer">
              S
            </div>
            <div className="px-6 py-5 bg-slate-50 border-solid border-1 border-slate-100 rounded-xl cursor-pointer">
              M
            </div>
            <div className="px-6 py-5 bg-slate-50 border-solid border-1 border-slate-100 rounded-xl cursor-pointer">
              L
            </div>
            <div className="px-6 py-5 bg-slate-50 border-solid border-1 border-slate-100 rounded-xl cursor-pointer">
              XL
            </div>
            <div className="px-6 py-5 bg-slate-50 border-solid border-1 border-slate-100 rounded-xl cursor-pointer">
              XXL
            </div>
          </div>
        </div>
        <button
          className="p-3 w-40 font-semibold text-white bg-red-500 mb-10 border-none outline-none cursor-pointer "
          onClick={() => {
            addToCart(props.product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="mt-2">
          <span className="font-semibold">Catergory:</span> Women, T-Shirt, Crop
          Top
        </p>
        <p>
          <span>Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};
