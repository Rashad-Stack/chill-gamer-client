import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "keep-react";
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";

export default function BlogCard({ blog = {} }) {
  const { id, title, article, image } = blog;
  return (
    <Fade>
      <Card className="dark:bg-dark dark:text-white max-w-full">
        <CardHeader>
          <img
            src={image}
            className="rounded-t-xl max-h-44 object-cover w-full"
            alt={title}
          />
        </CardHeader>
        <CardContent className="space-y-3">
          <CardTitle className="line-clamp-2">{title}</CardTitle>
          <CardDescription className="line-clamp-4 text-body-3 font-inter">
            {article}
          </CardDescription>
          <Link to={`/blogs/${id}`} className="block w-fit">
            <Button>Read more</Button>
          </Link>
        </CardContent>
      </Card>
    </Fade>
  );
}

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
};
