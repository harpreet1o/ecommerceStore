import React, { useEffect, useState } from "react";

import { Items } from "../Item/Items";
export const NewCollections = () => {
  useEffect(() => {
    fetch("http://localhost:3000/newcollection")
      .then((res) => res.json())
      .then((data) => setNewCollection(data));
  }, []);
  const [newCollection, setNewCollection] = useState([]);
  return (
    <div className="flex flex-col items-center gap-3 mb-24 p-12">
      <h1 className="text-5xl font-semibold text-slate-700">NEW COLLECTIONS</h1>
      <hr className="w-52 h-2 rounded-xl bg-slate-900" />
      <div className="grid grid-cols-4 mt-12 gap-7">
        {newCollection.map((item, i) => {
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
