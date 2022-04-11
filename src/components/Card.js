import { useState } from "react";
import Rating from "./Rating";
import Feedback from "./Feedback";

const Card = () => {
  const [rating, setRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating != 0) {
      setHasRated(true);
    }
  };

  return !hasRated ? (
    <Rating setRating={setRating} handleSubmit={handleSubmit} rating={rating} />
  ) : (
    <Feedback rating={rating} />
  );
};

export default Card;
