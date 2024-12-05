import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "keep-react";
import { Link } from "react-router";

export default function BlogCard() {
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
        <CardTitle className="line-clamp-2">
          The GTA 6 Trailer Was Released One Year Ago Today, And Fans Are Still
          Waiting For Anything More
        </CardTitle>
        <CardDescription className="line-clamp-4 text-body-3 font-inter">
          Today, December 5, marks the one year anniversary of the first Grand
          Theft Auto VI trailer. In the year since, Rockstar Games has not
          released any additional videos or images, while parent company
          Take-Two has shared precious few words and updates on the long-awaited
          open-world game.
        </CardDescription>
        <Link to="/game/age-of-mythology-retold" className="block w-fit">
          <Button>Read more</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
