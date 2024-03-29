import logo from "../assets/logo.png";
import cartIcon from "../assets/cart_icon.png";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const { cartItems } = useContext(ShopContext);
  const sumCart = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);
  const sumValues = sumCart(cartItems);

  return (
    <div className="flex justify-around p-4 shadow">
      <Link to="/">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="" />

          <p className="text-gray-800 text-4xl font-semibold cursor-pointer">
            SHOPPER
          </p>
        </div>
      </Link>

      <ul className="flex items-center gap-12 text-gray-500 text-xl font-medium">
        <li
          onClick={() => setMenu("Shop")}
          className="flex flex-col items-center justify-center gap cursor-pointer"
        >
          <Link to="/"> Shop</Link>

          {menu == "Shop" ? (
            <hr className="border-none w-4/5 h-1 rounded-xl bg-red-500 mt-3" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => setMenu("Men")}
          className="flex flex-col items-center justify-center gap cursor-pointer"
        >
          <Link to="/men"> Men</Link>

          {menu == "Men" ? (
            <hr className="border-none w-4/5 h-1 rounded-xl bg-red-500 mt-3" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => setMenu("Women")}
          className="flex flex-col items-center justify-center gap cursor-pointer"
        >
          <Link to="/women">Women</Link>

          {menu == "Women" ? (
            <hr className="border-none w-4/5 h-1 rounded-xl bg-red-500 mt-3" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => setMenu("Kids")}
          className="flex flex-col items-center justify-center gap cursor-pointer"
        >
          <Link to="/kids">Kids</Link>

          {menu == "Kids" ? (
            <hr className="border-none w-4/5 h-1 rounded-xl bg-red-500 mt-3" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="flex items-center gap-11">
        {localStorage.getItem("auth-token") ? (
          <button
            className=" w-40 h-12 outline-none border-2 border-solid border-gray-400 text-gray-800 text-xl font-medium rounded-3xl bg-white cursor-pointer active:bg-slate-200"
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/ ");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            {" "}
            <button className=" w-40 h-12 outline-none border-2 border-solid border-gray-400 text-gray-800 text-xl font-medium rounded-3xl bg-white cursor-pointer active:bg-slate-200">
              Login
            </button>
          </Link>
        )}

        <Link to="/cart">
          {" "}
          <img src={cartIcon} alt="" />
        </Link>

        <div className="flex h-5 w-5 justify-center items-center -mt-8 -ml-14 rounded-xl text-sm bg-red-500 text-white">
          {sumValues}
        </div>
      </div>
    </div>
  );
};
