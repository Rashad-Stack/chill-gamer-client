import { Button } from "keep-react";
import {
  CalendarCheck,
  Envelope,
  GameController,
  Star,
  User,
} from "phosphor-react";
import { useFetcher, useLoaderData } from "react-router";
import SectionTitle from "../components/SectionTitle";

export default function ReviewDetails() {
  const review = useLoaderData();
  const fetcher = useFetcher();

  const {
    _id,
    title,
    rating,
    publishingYear,
    thumbnail,
    genres,
    name,
    email,
    text,
  } = review || {};

  return (
    <section>
      <div className="container lg:max-w-7xl mx-auto max-xl:px-4 my-8 space-y-4">
        <div className="flex justify-between items-center">
          <SectionTitle
            title={{
              sub: "Review Details",
              main: title,
            }}
          />

          <Button
            onClick={() =>
              fetcher.submit(review, {
                method: "post",
                action: `/review/${_id}`,
              })
            }
            disabled={fetcher.state === "submitting"}
            className="disabled:opacity-50">
            Add to WatchList
          </Button>
        </div>

        <div
          className={`flex items-end sm:items-center max-lg:justify-center rounded-xl border border-metal-100 h-[500px] dark:border-metal-900 dark:bg-metal-900 bg-cover bg-no-repeat bg-top`}
          style={{
            backgroundImage: `url(${thumbnail})`,
          }}>
          <div className="bg-primary-50/10 p-4 backdrop-blur-md rounded-md grid grid-cols-2 gap-4 relative lg:left-40">
            <div className="flex items-center gap-2 text-white text-heading-6">
              <Star size={40} className="text-primary-500" />
              <span>{rating}.0</span>
            </div>
            <div className="flex items-center gap-2 text-white text-heading-6">
              <CalendarCheck size={40} className="text-primary-500" />
              <span>{publishingYear}</span>
            </div>
            <div className="flex items-center gap-2 text-white text-heading-6">
              <User size={40} className="text-primary-500" />{" "}
              <span>{name}</span>
            </div>
            <div className="flex items-center gap-2 text-white text-heading-6">
              <GameController size={40} className="text-primary-500" />
              <span>{genres}</span>
            </div>

            <div className="flex items-center gap-2 text-white text-heading-6 col-span-full">
              <Envelope size={40} className="text-primary-500" />{" "}
              <span>{email}</span>
            </div>
          </div>
        </div>
        <p className="text-body-4 text-gray-400 tracking-wide font-inter">
          {text}
        </p>
      </div>
    </section>
  );
}
