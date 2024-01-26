import React, { useContext } from "react";
import removeIcon from "../assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export const CartItems = () => {
  const { allProduct, cartItems, RemoveFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className="mx-40 my-28">
      <div className="grid grid-cols-6 items-center gap-12 text-gray-700 py-4 font-semibold">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quanity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-1 bg-slate-50 border-0" />

      {allProduct.map((e, id) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={id}>
              <div className="grid grid-cols-6 items-center gap-12 text-gray-700 py-4 font-medium ">
                <img src={e.image} alt="" className="h-12" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="w-12 h-10 border-solid border-2 border-slate-50 bg-white">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="w-3 mx-8"
                  src={removeIcon}
                  onClick={() => {
                    RemoveFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="flex my-20">
        <div className="flex flex-1 flex-col  mr-40 gap-10">
          <h1 className="font-bold text-3xl">CART Total</h1>
          <div>
            <div className="flex justify-between py-4">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-4">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>

            <hr />
            <div className="flex justify-between py-4">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="w-50 h-12 outline-none border-none bg-red-400 text-white font-semibold cursor-pointer">
            {" "}
            Proceed to Checkout
          </button>
        </div>
        <div className="flex-1 font-medium">
          <p className="text-gray-500 ">
            If you have a promo code, Enter it here
          </p>
          <div className="w-100 mt-4 pl-5 h-12 bg-slate-50 flex">
            <input
              type="text"
              placeholder="promo code"
              className="border-none outline-none bg-transparent w-70 h-12"
            />
            <button className="w-40 h-12 bg-black cursor-pointer text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
