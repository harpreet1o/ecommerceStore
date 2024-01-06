import React from "react";
import { Hero } from "../components/Hero/Hero";
import { Popular } from "../components/popular/Popular";
import { Offers } from "../components/offers/offers";
import { NewCollections } from "../components/NewCollections/NewCollections";
import { NewsLettter } from "../components/NewsLetter/NewsLettter";
export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLettter />
    </div>
  );
};
