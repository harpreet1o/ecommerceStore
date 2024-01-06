import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdownIcon from "../components/assets/dropdown_icon.png";
import { Items } from "../components/Item/Items";
export const ShopCategory = (props) => {
  const { allProduct } = useContext(ShopContext);

  return (
    <div>
      <img src={props.banner} alt="" className="" />
      <div>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div>
          Sort by <img src={dropdownIcon} alt="" />
        </div>
      </div>
      <div>
        {allProduct.map((item, i) => {
          if (props.category === item.category) {
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
          } else return;
        })}
      </div>
    </div>
  );
};
