import React, { useEffect, useState } from "react";
import crossIcon from "../../assets/cross_icon.png";

export const ListProduct = () => {
  const [allProduct, setAllProduct] = useState([]);
  const fetchInfo = async () => {
    await fetch("http://localhost:3000/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  const removeProduct = async (id) => {
    console.log(id);
    await fetch("http://localhost:3000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };
  return (
    <div className=" w-full h-740 px-12 py-2 m-12 rounded-xs bg-white">
      <h1 className="font-semibold text-3xl flex justify-center">
        All Products list{" "}
      </h1>
      <div className="grid grid-cols-6 gap-2 w-full py-5 text-gray-800 font-medium ">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div>
        <hr />
        <div className="overflow-y-auto">
          {allProduct.map((product, i) => {
            return (
              <div
                key={i}
                className="grid grid-cols-6 gap-2 w-full py-5 text-gray-800 font-medium "
              >
                <img src={product.image} alt="" />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img
                  src={crossIcon}
                  className="cursor-pointer"
                  onClick={() => {
                    removeProduct(product.id);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
