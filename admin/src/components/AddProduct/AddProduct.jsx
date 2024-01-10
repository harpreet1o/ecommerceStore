import React, { useState } from "react";
import uploadArea from "../../assets/upload_area.svg";

export const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const addProduct = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);
    await fetch("http://localhost:3000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:3000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) =>
          data.success ? alert("product is added") : alert("failed")
        );
    }
  };
  return (
    <div className="w-full max-w-800 px-12 py-8 my-5 mx-7 rounded-sm bg-white ">
      <div className="w-100 text-gray-500">
        <p>Product Title</p>
        <input
          value={productDetails.name}
          type="text"
          name="name"
          placeholder="Type here"
          className="box-border w-100 h-12 rounded-sm pl-4 border-solid border-gray-50 border-2 ouline-none text-slate-200 font-poppins"
          onChange={changeHandler}
        />
      </div>
      <div className="flex gap-10 ">
        <div className="w-100 text-gray-500">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="type here"
            className="box-border w-100 h-12 rounded-sm pl-4 border-solid border-gray-50 border-2 ouline-none text-slate-200 font-poppins"
          />
        </div>
        <div className="w-100 text-gray-500">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="type here"
            className="box-border w-100 h-12 rounded-sm pl-4 border-solid border-gray-50 border-2 ouline-none text-slate-200 font-poppins"
          />
        </div>
      </div>
      <div className="w-100 text-gray-500">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="p-3 w-28 h-12 text-gray-600 border-solid border-2 border-gray-500 text-sm"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="w-100 text-gray-500 ">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : uploadArea}
            className="h-30 w-30 rounded-2 object-contain my-2"
            alt=""
          />
        </label>
        <input
          type="file"
          name="image"
          id="file-input"
          hidden
          onChange={imageHandler}
        />
      </div>
      <button
        onClick={addProduct}
        className="mt-5 w-40 h-12 rounded-xl bg-blue-300 border-none cursor-pointer text-whit' font-medium"
      >
        ADD
      </button>
    </div>
  );
};
