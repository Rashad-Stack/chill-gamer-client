import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "keep-react";
import { Link } from "react-router";
import GameRating from "./GameRating";
export default function GameCard() {
  return (
    <Card className="dark:bg-dark dark:text-white max-w-full">
      <CardHeader>
        <img
          src="https://i.postimg.cc/X7yZ8qD4/GLP-Page-Hero-1084-1920x1080.jpg"
          className="rounded-t-xl"
          alt="image"
          width={600}
          height={300}
        />
      </CardHeader>
      <CardContent className="space-y-3">
        <CardTitle>Age of Mythology: Retold</CardTitle>
        <GameRating />
        <CardDescription className="line-clamp-2">
          Combining the best elements of the beloved Age of Mythology with
          modern real-time strategy design and visuals, Retold is an epic and
          innovative experience for everyone.
        </CardDescription>
        <Link to="/game/age-of-mythology-retold" className="block w-fit">
          <Button>Explore Details</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
