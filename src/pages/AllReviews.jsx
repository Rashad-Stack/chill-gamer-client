import { useLoaderData } from "react-router";
import Filter from "../components/Filter";
import GameCard from "../components/GameCard";
import SectionTitle from "../components/SectionTitle";
import Sort from "../components/Sort";

export default function AllReviews() {
  const reviews = useLoaderData();

  return (
    <section>
      <div className="container lg:max-w-7xl mx-auto max-xl:px-4 my-8 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <SectionTitle
            title={{
              sub: "Discover the best games",
              main: "All Games",
            }}
          />
          <div className="flex gap-4 items-center">
            <Sort />
            <Filter />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {reviews && reviews.length ? (
              reviews.map((review) => (
                <GameCard key={review._id} review={review} />
              ))
            ) : (
              <div className="text-center text-gray-500 dark:text-gray-300">
                No reviews found!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
