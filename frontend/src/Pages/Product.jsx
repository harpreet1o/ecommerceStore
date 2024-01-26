import React, { useContext } from "react";
import { Breadcrums } from "../components/BreadCrums/Breadcrums";
import { ProductDisplay } from "../components/ProductDisplay/ProductDisplay";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import { Description } from "../components/DescriptionBox/Description";
import { RelatedProduct } from "../components/RelatedProducts.jsx/RelatedProduct";

export const Product = () => {
  const { allProduct } = useContext(ShopContext);
  console.log(allProduct);

  const { productId } = useParams();
  const product = allProduct.find((e) => {
    return e.id == productId;
  });

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProduct />
    </div>
  );
};
