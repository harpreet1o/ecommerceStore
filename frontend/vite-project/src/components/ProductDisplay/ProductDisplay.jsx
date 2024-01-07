import React from "react";
import starIcon from "../assets/star_icon.png";
import stardullIcon from "../assets/star_dull_icon.png";

export const ProductDisplay = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <div>
          <img src={props.image} src={starIcon} alt="" />
          <img src={props.image} src={starIcon} alt="" />
          <img src={props.image} src={starIcon} alt="" />
          <img src={props.image} src={starIcon} alt="" />
          <img src={props.image} src={stardullIcon} alt="" />
          <p>(122)</p>
        </div>
        <div>
          <div>{props.old_price}</div>
          <div>{props.new_price}</div>
        </div>
        <div>
          <img src={props.image} alt="" />
        </div>
      </div>
      <div>
        <h1>{props.name}</h1>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};
