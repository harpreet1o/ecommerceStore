import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdownIcon from "../components/assets/dropdown_icon.png";
import { Items } from "../components/Item/Items";
export const ShopCategory = (props) => {
  const { allProduct } = useContext(ShopContext);

  return (
    <div>
      <img src={props.banner} alt="" className="block my-8 mx-auto w-5/6 " />
      <div className="flex mx-40 justify-between items-center">
        <p>
          <span className="text-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div className="px-4 py-2 rounded-3xl border-solid border-2 border-slate-600 flex items-center gap-1">
          Sort by <img src={dropdownIcon} alt="" />
        </div>
      </div>
      <div className="mx-4 my-5 grid grid-cols-4 gap-x-20">
        {allProduct.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else return;
        })}
      </div>
      <div className="flex justify-center items-center my-36 mx-auto w-60 h-16 rounded-3xl bg-slate-100 text-gray-500 text-medium ">
        Explore More
      </div>
    </div>
  );
};
