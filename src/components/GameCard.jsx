import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "keep-react";
import { Activity, Download, GameController } from "phosphor-react";
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
        <div className="flex gap-1 items-center">
          <GameRating value={1} />
          <span>4.8</span> <span>(50K)</span>
        </div>
        <div className="flex items-center justify-between">
          <CardDescription className="flex gap-1 items-center">
            <Download size={20} className="text-primary-500" /> <span>50M</span>
          </CardDescription>
          <CardDescription className="flex gap-1 items-center">
            <Activity size={20} className="text-primary-500" /> <span>50M</span>
          </CardDescription>
          <CardDescription className="flex gap-1 items-center">
            <GameController size={20} className="text-primary-500" />
            <span>X-Box</span>
          </CardDescription>
        </div>
        <Link to="/review/age-of-mythology-retold" className="block w-fit">
          <Button>Explore Details</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
