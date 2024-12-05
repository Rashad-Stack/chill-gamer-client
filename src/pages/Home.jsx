import Banner from "../components/Banner";
import BlogCard from "../components/BlogCard";
import GameCard from "../components/GameCard";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
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
              sub: "Discover the best games",
              main: "Highest Rated Game Section",
            }}
          />
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
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
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container lg:max-w-7xl mx-auto max-xl:px-4 my-8 space-y-4">
          <SectionTitle
            title={{
              sub: "Discover the best games",
              main: "Recently Added Games",
            }}
          />
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
