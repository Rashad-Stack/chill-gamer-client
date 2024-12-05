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
import { Link } from "react-router";
import DeleteReview from "../components/DeleteReview";
import SectionTitle from "../components/SectionTitle";

export default function MyReviews() {
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
                <div className="w-[80px]">Status</div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="max-w-[250px] truncate">
                  Age of Mythology: Retold
                </div>
              </TableCell>
              <TableCell>Action</TableCell>
              <TableCell>4.8</TableCell>
              <TableCell>2024</TableCell>
              <TableCell>
                <div className="space-x-4">
                  <Link to="/updateReview/:id">
                    <Button>
                      <Pencil size={20} />
                    </Button>
                  </Link>
                  <DeleteReview />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
