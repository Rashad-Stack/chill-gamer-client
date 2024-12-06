import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";
import { useLoaderData } from "react-router";
import SectionTitle from "../components/SectionTitle";

export default function GameWatchlist() {
  const wishlists = useLoaderData();

  return (
    <section>
      <div className="container lg:max-w-7xl mx-auto max-xl:px-4 my-8 space-y-4">
        <SectionTitle
          title={{
            sub: "Discover the best games",
            main: "My Wishlist",
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
            </TableRow>
          </TableHeader>
          {wishlists && wishlists.length && (
            <TableBody>
              {wishlists.map((review) => (
                <TableRow key={review._id}>
                  <TableCell>
                    <div className="max-w-[250px] truncate">{review.title}</div>
                  </TableCell>
                  <TableCell>{review.genres}</TableCell>
                  <TableCell>{review.rating}.0</TableCell>
                  <TableCell>{review.publishingYear}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </div>
    </section>
  );
}
