import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Tooltip,
  TooltipAction,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
} from "keep-react";
import { auth } from "../firebase/config";

export default function ProfileInfo() {
  const user = auth?.currentUser;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipAction asChild>
          <Avatar className="w-8 h-8">
            <AvatarImage src={user?.photoURL} />
            <AvatarFallback className="border border-primary-500 dark:text-white">
              {user?.displayName?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
        </TooltipAction>
        <TooltipContent>
          <TooltipArrow />
          <p className="text-body-5 font-medium text-white">
            {user?.displayName}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
