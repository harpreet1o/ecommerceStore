import React, { useContext } from "react";
import { Breadcrums } from "../components/BreadCrums/Breadcrums";
import { ProductDisplay } from "../components/ProductDisplay/ProductDisplay";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
export const Product = () => {
  const { allProduct } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProduct.find((e) => {
    return e.id == productId;
  });

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};
