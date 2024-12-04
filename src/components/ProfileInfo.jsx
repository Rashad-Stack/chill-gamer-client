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

export default function ProfileInfo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipAction asChild>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/images/avatar/avatar-4.png" />
            <AvatarFallback className="border border-primary-500 dark:text-white">
              KR
            </AvatarFallback>
          </Avatar>
        </TooltipAction>
        <TooltipContent>
          <TooltipArrow />
          <p className="text-body-5 font-medium text-white">
            Tooltip - Title here
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
