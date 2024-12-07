import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "keep-react";
import { CalendarCheck, GameController, Star } from "phosphor-react";
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";
export default function GameCard({ review = {} }) {
  const { _id, title, rating, publishingYear, thumbnail, genres } = review;

  return (
    <Fade>
      <Card className="dark:bg-dark dark:text-white max-w-full">
        <CardHeader>
          <img
            src={thumbnail}
            className="rounded-t-xl max-h-44 object-cover w-full"
            alt={title}
          />
        </CardHeader>
        <CardContent className="space-y-3">
          <CardTitle className="line-clamp-1">{title}</CardTitle>
          <div className="flex items-center justify-between">
            <CardDescription className="flex gap-1 items-center">
              <Star size={20} className="text-primary-500" />
              <span>{rating}.0</span>
            </CardDescription>
            <CardDescription className="flex gap-1 items-center">
              <CalendarCheck size={20} className="text-primary-500" />
              <span>{publishingYear}</span>
            </CardDescription>
            <CardDescription className="flex gap-1 items-center">
              <GameController size={20} className="text-primary-500" />
              <span>{genres}</span>
            </CardDescription>
          </div>
          <Link to={`/review/${_id}`} className="block w-fit">
            <Button>Explore Details</Button>
          </Link>
        </CardContent>
      </Card>
    </Fade>
  );
}

GameCard.propTypes = {
  review: PropTypes.object.isRequired,
};
