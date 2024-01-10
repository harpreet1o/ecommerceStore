import React from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import { AddProduct } from "../../components/AddProduct/AddProduct";
import { ListProduct } from "../../components/ListProduct/ListProduct";
export const Admin = () => {
  return (
    <div className="bg-slate-50 flex ">
      <Sidebar />
      <Routes>
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/listProduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};
