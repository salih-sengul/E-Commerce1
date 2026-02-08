import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlarmClock, ChartLine, ChevronRight } from "lucide-react";

export const FeaturedProduct = () => {
  return (
    <Card className={"max-w-[331px] gap-5 rounded-none"}>
      <div className="relative">
        <img src="assets/featured1.png" alt="" />
        <span className="h6 absolute top-5 left-5 rounded-sm bg-red-500 px-2 py-1 font-bold text-white">
          New
        </span>
      </div>

      <CardContent className={"flex flex-col gap-2.5"}>
        <ul className="text-second-text-color flex gap-4 text-xs">
          <li>
            <a href="">Google</a>
          </li>
          <li>
            <a href="">Trending</a>
          </li>
          <li>
            <a href="">New</a>
          </li>
        </ul>
        <div className="h4">Loudest à la Madison #1 (L'integral)</div>
        <p className="paragraph text-second-text-color">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </CardContent>
      <CardContent className={""}>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <AlarmClock className="text-primary-color size-4" />
            <div className="text-second-text-color text-xs">22 April 2021</div>
          </div>
          <div className="flex items-center gap-2">
            <ChartLine className="text-secondary-color-1 size-4" />
            <div className="text-second-text-color text-xs">10 comments</div>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <a href="" className="flex">
          <span className="h6 text-second-text-color">Learn More</span>
          <ChevronRight className="text-primary-color text" />
        </a>
      </CardFooter>
    </Card>
  );
};
