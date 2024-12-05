import {
  Button,
  Input,
  Label,
  Select,
  SelectAction,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
  Textarea,
} from "keep-react";
import { useFetcher, useLocation } from "react-router";
import Loading from "../components/Loading";

export default function UpdateReview() {
  const fetcher = useFetcher();
  const { state } = useLocation();
  return (
    <section>
      <div className="container lg:max-w-7xl mx-auto max-xl:px-4 my-8 space-y-4">
        <fetcher.Form
          className="space-y-4"
          method="post"
          action={`/auth/register?from=${state?.from || "/"}`}>
          {fetcher.state === "submitting" && <Loading />}
          <div className="mb-4">
            <h3 className="text-primary-500 text-3xl font-extrabold">
              Update Review
            </h3>
            <p className="text-gray-500 dark:text-gray-300 text-sm mt-4 leading-relaxed">
              Add a valuable review to help gamers make informed decisions.
            </p>
          </div>

          <div className="space-y-4 dark:text-white">
            <div className="grid grid-cols-2 gap-4">
              <fieldset className="space-y-1">
                <Label htmlFor="title">Game Title</Label>
                <Input
                  placeholder="Enter Game Title"
                  className="dark:bg-dark dark:text-white"
                  type="text"
                  name="title"
                  id="title"
                />
              </fieldset>

              <fieldset className="space-y-1">
                <Label htmlFor="rating">Rating</Label>
                <Input
                  id="rating"
                  placeholder="Enter Rating 1 to 5"
                  type="number"
                  className="dark:bg-dark dark:text-white"
                  name="rating"
                />
              </fieldset>
              <fieldset className="space-y-1">
                <Label htmlFor="publishingYear">Publishing year</Label>
                <Input
                  id="publishingYear"
                  placeholder="Ex: 2021, 2024"
                  type="number"
                  min="1900"
                  max="2100"
                  className="dark:bg-dark dark:text-white"
                  name="publishingYear"
                />
              </fieldset>
              <fieldset className="space-y-1">
                <Label htmlFor="genres">Genres</Label>
                <Select>
                  <SelectAction className="dark:bg-dark">
                    <SelectValue placeholder="Select Genres" />
                  </SelectAction>
                  <SelectContent className="dark:bg-dark">
                    <SelectGroup>
                      <SelectItem value="action">Action</SelectItem>
                      <SelectItem value="rpg">RPG</SelectItem>
                      <SelectItem value="adventure">Adventure</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </fieldset>
              <fieldset className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  placeholder="Enter Email"
                  className="dark:bg-dark dark:text-white"
                  type="email"
                  name="email"
                  id="email"
                  readOnly
                />
              </fieldset>
              <fieldset className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  placeholder="Enter Name"
                  className="dark:bg-dark dark:text-white"
                  type="name"
                  name="name"
                  id="name"
                />
              </fieldset>
            </div>
            <fieldset className="space-y-1">
              <Label htmlFor="thumbnail">Game Cover Image</Label>
              <Input
                placeholder="a URL for the game cover"
                className="dark:bg-dark dark:text-white"
                type="text"
                name="thumbnail"
                id="thumbnail"
              />
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="text">Review Description</Label>
              <Textarea
                placeholder="Enter URL"
                className="dark:bg-dark dark:text-white"
                type="text"
                name="text"
                id="text"
                rows={8}
              />
            </fieldset>
          </div>
          <div className="!mt-8">
            <Button type="submit" className="w-full">
              Update
            </Button>
          </div>
        </fetcher.Form>
      </div>
    </section>
  );
}
