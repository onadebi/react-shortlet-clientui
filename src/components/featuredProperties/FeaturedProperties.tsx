import React from "react";
import "./featuredProperties.scss";
import FeaturedProperty from "./FeaturedProperty";

const FeaturedProperties = () => {
  return (
    <div className="featuredProperties">
      <FeaturedProperty ratingScore={8.9} name={'Tulip Luxury room'} price={15000} ratingComment={'Excellent'} stateCity={'Lagos, Oniru'} />
      <FeaturedProperty ratingScore={4.9} name={'Tulip Luxury room'} price={15000} ratingComment={'Excellent'} stateCity={'Lagos, Oniru'} />
      <FeaturedProperty ratingScore={8.9} name={'Tulip Luxury room'} price={15000} ratingComment={'Excellent'} stateCity={'Lagos, Oniru'} />
      <FeaturedProperty ratingScore={3.9} name={'Tulip Luxury room'} price={15000} ratingComment={'Excellent'} stateCity={'Lagos, Oniru'} />
    </div>
  );
};

export default FeaturedProperties;
