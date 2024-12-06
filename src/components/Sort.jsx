import {
  Select,
  SelectAction,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from "keep-react";
import { useSearchParams } from "react-router";

export default function Sort() {
  const [searchParam, setSearchParam] = useSearchParams();
  const filter = searchParam.get("sort");

  const handleSearchParam = (value) => {
    searchParam.set("sort", value);
    setSearchParam(searchParam, {
      replace: true,
    });
  };

  return (
    <Select onValueChange={handleSearchParam} defaultValue={filter}>
      <SelectAction className="w-fit dark:bg-dark text-nowrap gap-1">
        <SelectValue placeholder="Sort review" />
        {!filter && "Sort review"}
      </SelectAction>
      <SelectContent className="dark:bg-dark">
        <SelectGroup>
          <SelectItem
            value="rating"
            className="cursor-pointer flex items-center gap-2">
            Sort by rating
          </SelectItem>
          <SelectItem value="year" className="cursor-pointer">
            Sort by year
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
