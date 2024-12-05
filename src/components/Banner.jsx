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
import GameRating from "./GameRating";

export default function Banner() {
  return (
    <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
      <CarouselSlides>
        {sliderData.map((slide, idx) => (
          <CarouselItem key={idx}>
            <div
              className={`flex items-end sm:items-center max-lg:justify-center rounded-xl border border-metal-100 h-[500px] dark:border-metal-900 dark:bg-metal-900 bg-cover bg-no-repeat bg-top`}
              style={{
                backgroundImage: `url(${slide.image})`,
              }}>
              <div className="bg-primary-50/10 p-4 backdrop-blur-md max-w-sm rounded-md flex flex-col items-center gap-4 relative lg:left-40">
                <Badge variant="background">Most rated</Badge>
                <h1 className="text-heading-6 font-bold text-white">
                  Age of Mythology: Retold
                </h1>
                <p className="text-body-5 text-center text-white tracking-wide">
                  Combining the best elements of the beloved Age of Mythology
                  with modern real-time strategy design and visuals, Retold is
                  an epic and innovative experience for everyone.
                </p>
                <GameRating />
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

const sliderData = [
  {
    title: "Age of Mythology: Retold",
    description: "Description 1",
    image: "https://i.postimg.cc/cCfSvpXy/Call-of-Duty-Black-Ops-6.jpg",
  },
  {
    title: "Slide 1",
    description: "Description 1",
    image: "https://i.postimg.cc/3RMfkd6N/DEATH-STRANDING.png",
  },
  {
    title: "Slide 1",
    description: "Description 1",
    image: "https://i.postimg.cc/X7yZ8qD4/GLP-Page-Hero-1084-1920x1080.jpg",
  },
];
