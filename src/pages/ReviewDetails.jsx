import { Button } from "keep-react";
import {
  CalendarCheck,
  Envelope,
  GameController,
  Star,
  User,
} from "phosphor-react";
import SectionTitle from "../components/SectionTitle";

export default function ReviewDetails() {
  return (
    <section>
      <div className="container lg:max-w-7xl mx-auto max-xl:px-4 my-8 space-y-4">
        <div className="flex justify-between items-center">
          <SectionTitle
            title={{
              sub: "Review Details",
              main: "Age of Mythology: Retold",
            }}
          />
          <Button>Add to WatchList</Button>
        </div>

        <div
          className={`flex items-end sm:items-center max-lg:justify-center rounded-xl border border-metal-100 h-[500px] dark:border-metal-900 dark:bg-metal-900 bg-cover bg-no-repeat bg-top`}
          style={{
            backgroundImage: `url(https://i.postimg.cc/X7yZ8qD4/GLP-Page-Hero-1084-1920x1080.jpg)`,
          }}>
          <div className="bg-primary-50/10 p-4 backdrop-blur-md rounded-md grid grid-cols-2 gap-4 relative lg:left-40">
            <div className="flex items-center gap-2 text-white text-heading-6">
              <Star size={40} className="text-primary-500" />
              <span>4.8</span> <span>(50K)</span>
            </div>
            <div className="flex items-center gap-2 text-white text-heading-6">
              <CalendarCheck size={40} className="text-primary-500" />
              <span>2024</span>
            </div>
            <div className="flex items-center gap-2 text-white text-heading-6">
              <User size={40} className="text-primary-500" />{" "}
              <span>Rashad Stack</span>
            </div>
            <div className="flex items-center gap-2 text-white text-heading-6">
              <GameController size={40} className="text-primary-500" />
              <span>Actions</span>
            </div>

            <div className="flex items-center gap-2 text-white text-heading-6 col-span-full">
              <Envelope size={40} className="text-primary-500" />{" "}
              <span>rashadstack@gmail.com</span>
            </div>
          </div>
        </div>
        <p className="text-body-4 text-gray-400 tracking-wide font-inter">
          Combining the best elements of the beloved Age of Mythology with
          modern real-time strategy design and visuals, Retold is an epic and
          innovative experience for everyone. Combining the best elements of the
          beloved Age of Mythology with modern real-time strategy design and
          visuals, Retold is an epic and innovative experience for everyone.
          Combining the best elements of the beloved Age of Mythology with
          modern real-time strategy design and visuals, Retold is an epic and
          innovative experience for everyone. Combining the best elements of the
          beloved Age of Mythology with modern real-time strategy design and
          visuals, Retold is an epic and innovative experience for everyone.
          Combining the best elements of the beloved Age of Mythology with
          modern real-time strategy design and visuals, Retold is an epic and
          innovative experience for everyone. Combining the best elements of the
          beloved Age of Mythology with modern real-time strategy design and
          visuals, Retold is an epic and innovative experience for everyone.
          Combining the best elements of the beloved Age of Mythology with
          modern real-time strategy design and visuals, Retold is an epic and
          innovative experience for everyone. Combining the best elements of the
          beloved Age of Mythology with modern real-time strategy design and
          visuals, Retold is an epic and innovative experience for everyone.
        </p>
      </div>
    </section>
  );
}
