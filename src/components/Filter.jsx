import {
  Select,
  SelectAction,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from "keep-react";
import { useSearchParams } from "react-router";

export default function Filter() {
  const [searchParam, setSearchParam] = useSearchParams();
  const filter = searchParam.get("filter");

  const handleSearchParam = (value) => {
    searchParam.set("filter", value);
    setSearchParam(searchParam, {
      replace: true,
    });
  };
  return (
    <Select onValueChange={handleSearchParam} defaultValue={filter}>
      <SelectAction className="w-fit dark:bg-dark text-nowrap gap-1">
        <SelectValue placeholder="Filter review" />
        {!filter && "Filter review"}
      </SelectAction>
      <SelectContent className="dark:bg-dark">
        <SelectGroup>
          <SelectItem value="Action" className="cursor-pointer">
            Action
          </SelectItem>
          <SelectItem value="RPG" className="cursor-pointer">
            RPG
          </SelectItem>
          <SelectItem value="Adventure" className="cursor-pointer">
            Adventure
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
