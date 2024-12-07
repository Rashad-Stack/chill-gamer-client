import autoPlay from "embla-carousel-autoplay";
import {
  Badge,
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from "keep-react";
import { useEffect } from "react";
import { useFetcher } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import GameRating from "./GameRating";

export default function Banner() {
  const fetcher = useFetcher();

  useEffect(() => {
    if (fetcher.state === "idle" && !fetcher.data) {
      fetcher.load("/slider");
    }
  }, [fetcher]);

  return (
    <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
      <CarouselSlides>
        {fetcher?.data &&
          fetcher?.data.length &&
          fetcher.data.map((slide) => (
            <CarouselItem key={slide?._id}>
              <div
                className={`flex items-end sm:items-center max-lg:justify-center rounded-xl border border-metal-100 h-[500px] dark:border-metal-900 dark:bg-metal-900 bg-cover bg-no-repeat bg-top`}
                style={{
                  backgroundImage: `url(${slide.thumbnail})`,
                }}>
                <div className="bg-primary-50/10 p-4 backdrop-blur-md max-w-sm rounded-md flex flex-col items-center gap-4 relative lg:left-40">
                  <Badge
                    className="text-body-5 font-bold text-white"
                    variant="background">
                    Most rated
                  </Badge>

                  <h1 className="text-heading-6 font-bold text-white min-h-10 line-clamp-1">
                    <Typewriter words={[slide.title]} loop />
                  </h1>
                  <p className="text-body-5 text-center text-white tracking-wide line-clamp-6">
                    {slide?.text}
                  </p>
                  <GameRating value={slide?.rating} />
                </div>
              </div>
            </CarouselItem>
          ))}
      </CarouselSlides>
      <CarouselControl>
        <CarouselButtons>
          <CarouselPrevButton />
          <CarouselNextButton />
        </CarouselButtons>
        <CarouselIndicators />
      </CarouselControl>
    </Carousel>
  );
}
