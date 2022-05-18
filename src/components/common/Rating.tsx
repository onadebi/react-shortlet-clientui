import React from "react";
import './styles/rating.scss';

interface IProps{
    ratingScore: number ;
    ratingComment: string;
    showRatingComment?: boolean
}


const Rating: React.FC<IProps> = ({ratingScore =0,ratingComment,showRatingComment=false }) => {
const styleRating = ratingScore > 5 ? { backgroundColor: "orange" } : {};
  return (
    <span className="fpRating">
      <button style={styleRating}>{ratingScore}</button>
     {showRatingComment ? <span>{ratingComment}</span>: null} 
    </span>
  );
};



export default Rating;
