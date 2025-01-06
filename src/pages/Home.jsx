import { Fade } from "react-awesome-reveal";
import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import BlogCard from "../components/BlogCard";
import GameCard from "../components/GameCard";
import RecentlyAdded from "../components/RecentlyAdded";
import SectionTitle from "../components/SectionTitle";
import blogs from "../data/blogs";

export default function Home() {
  const reviews = useLoaderData();
  return (
    <>
      <section>
        <div className="container lg:max-w-7xl mx-auto max-xl:px-4">
          <Banner />
        </div>
      </section>
      <section>
        <div className="container lg:max-w-7xl mx-auto max-xl:px-4 my-8 space-y-4">
          <SectionTitle
            title={{
              sub: "Discover the best movies",
              main: "Featured Movies",
            }}
          />
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {reviews && reviews.length ? (
                reviews.map((review) => (
                  <Fade
                    key={review?._id}
                    fraction={0}
                    cascade={true}
                    damping={0.1}>
                    <GameCard review={review} />
                  </Fade>
                ))
              ) : (
                <div className="text-center text-gray-500 dark:text-gray-300">
                  No movie found!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container lg:max-w-7xl mx-auto max-xl:px-4 my-8 space-y-4">
          <SectionTitle
            title={{
              sub: "Read a detailed reviews",
              main: "Latest blogs",
            }}
          />
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <RecentlyAdded />
    </>
  );
}
