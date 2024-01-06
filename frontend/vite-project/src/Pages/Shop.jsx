import React from "react";
import { Hero } from "../components/Hero/Hero";
import { Popular } from "../components/popular/Popular";
import { Offers } from "../components/offers/offers";
import { NewCollections } from "../components/NewCollections/NewCollections";
export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
    </div>
  );
};
