import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

export const Collection = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mx-10 flex max-w-[1050px] flex-col gap-7 pt-32 lg:h-[689px] lg:flex-row lg:gap-10 lg:pt-0">
        <div className="order flex w-full flex-col items-center justify-center gap-7 text-center lg:order-last lg:items-start lg:text-left">
          <div className="h5 text-muted-text-color">SUMMER 2020</div>
          <div className="h2">Part of the Neural Universe</div>
          <div className="h4 text-second-text-color lg:max-w-[369px]">
            We know how large objects will act, but things on a small scale.
          </div>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
            <Button
              variant={"default"}
              size={"lg"}
              className="bg-slider-bg hover:bg-slider-bg/80 text-light-text-color font-bold"
            >
              BUY NOW
            </Button>
            <Button
              variant={"default"}
              size={"lg"}
              className="text-slider-bg border-slider-bg hover:bg-muted-foreground/10 border-1 bg-white font-bold"
            >
              Learn More
            </Button>
          </div>
        </div>
        <img
          className="lg:h-auto lg:max-w-[625px] lg:object-cover"
          src="assets/couple.png"
          alt=""
        />
      </div>
    </div>
  );
};
