import React, { useEffect, useState } from "react";

import { Items } from "../Item/Items";
export const Popular = () => {
  const [popularProduct, setPopular] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/popularinwomen")
      .then((res) => res.json())
      .then((data) => setPopular(data));
  }, []);
  return (
    <div className="flex flex-col items-center gap-3 h-5/6 p-12">
      <h1 className="text-5xl font-semibold text-slate-700">
        Popular in Women
      </h1>
      <hr className="w-52 h-2 rounded-xl bg-slate-900" />
      <div className="mt-12 flex gap-7">
        {popularProduct.map((item, i) => {
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
