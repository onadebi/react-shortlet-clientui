import React from "react";
import Appsettings from "../../configs/appsettings";
import Rating from "../common/Rating";

interface IProps{
    ratingScore: number ;
    name: string;
    stateCity: string;
    ratingComment: string;
    price: number;
}

const FeaturedProperty: React.FC<IProps> = ({ratingScore: rating =0,name,stateCity,ratingComment,price }) => {
  const styleRating = rating > 5 ? { backgroundColor: "orange" } : {};
  return (
    <div className="fpItem">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTodfWs7NErp67tnCJDZGO_qXnDPYHfxXJPZQ&usqp=CAU"
        alt=""
        className="fpImg"
      />
      <span className="fpName">{name}</span>
      <span className="fpStateCity">{stateCity}</span>
      <span className="fpPrice">
        Starting from ₦{Appsettings.functions.NumberCommaFormat(price)}{" "}
      </span>
      <Rating ratingComment={ratingComment} ratingScore={rating} showRatingComment/>
      {/* <span className="fpRating">
        <button style={styleRating}>{rating}</button>
        <span>{ratingComment}</span>
      </span> */}
    </div>
  );
};

export default FeaturedProperty;
