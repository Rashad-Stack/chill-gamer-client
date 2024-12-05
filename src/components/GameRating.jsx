import { Rating, RatingStar } from "keep-react";
import PropTypes from "prop-types";

export default function GameRating({ value = 5 }) {
  return (
    <Rating className="text-primary-500">
      {Array.from({ length: value }).map((_, index) => (
        <RatingStar value={index + 1} key={index}></RatingStar>
      ))}
    </Rating>
  );
}

GameRating.propTypes = {
  value: PropTypes.number,
};
