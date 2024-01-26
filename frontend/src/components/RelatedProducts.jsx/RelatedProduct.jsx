import React from "react";
import dataProduct from "../assets/data";
import { Items } from "../Item/Items";

export const RelatedProduct = () => {
  return (
    <div className="flex flex-col items-center ga[-2 h-5/6">
      <h1 className="text-gray-800 text-3xl font-semibold ">
        Related Products
      </h1>
      <hr className="w-50 h-1 rounded-sm bg-gray-700" />
      <div className="mt-12 flex gap-7">
        {dataProduct.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};
