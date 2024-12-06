import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";
import { Pencil } from "phosphor-react";
import { Link, useLoaderData } from "react-router";
import DeleteReview from "../components/DeleteReview";
import SectionTitle from "../components/SectionTitle";

export default function MyReviews() {
  const reviews = useLoaderData();

  return (
    <section>
      <div className="container lg:max-w-7xl mx-auto max-xl:px-4 my-8 space-y-4">
        <SectionTitle
          title={{
            sub: "Discover the best games",
            main: "My Reviews",
          }}
        />
        <Table className="dark:bg-dark">
          <TableHeader>
            <TableRow>
              <TableHead>
                <div className="max-w-[250px]">Title</div>
              </TableHead>
              <TableHead>
                <div className="w-[85px]">Genres</div>
              </TableHead>
              <TableHead>
                <div className="w-[90px]">Ratings</div>
              </TableHead>
              <TableHead>
                <div className="w-[90px]">Year</div>
              </TableHead>
              <TableHead>
                <div className="w-[80px]">Actions</div>
              </TableHead>
            </TableRow>
          </TableHeader>
          {reviews && reviews.length && (
            <TableBody>
              {reviews.map((review) => (
                <TableRow key={review._id}>
                  <TableCell>
                    <div className="max-w-[250px] truncate">{review.title}</div>
                  </TableCell>
                  <TableCell>{review.genres}</TableCell>
                  <TableCell>{review.rating}.0</TableCell>
                  <TableCell>{review.publishingYear}</TableCell>
                  <TableCell>
                    <div className="space-x-4">
                      <Link to={`/updateReview/${review._id}`}>
                        <Button>
                          <Pencil size={20} />
                        </Button>
                      </Link>
                      <DeleteReview id={review._id} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </div>
    </section>
  );
}
