import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

function Slider({ className }) {
  return (
    <Carousel className={className}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="text-light-text-color flex items-center justify-center">
              <div className="mx-10 flex max-w-[1050px] flex-col gap-7 pt-28 lg:flex-row">
                <div className="flex w-full flex-col items-center justify-center gap-7 text-center lg:items-start lg:text-left">
                  <div className="h4">SUMMER 2020</div>
                  <div className="h2 lg:text-[58px]">Vita Classic Product</div>
                  <div className="h4 text-primary-foreground lg:max-w-[369px]">
                    We know how large objects will act, but things on a small
                    scale.
                  </div>
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
                    <div className="h3">$16.48</div>
                    <Button
                      variant={"success"}
                      size={"lg"}
                      className="bg-success-color text-light-text-color rounded-none font-bold"
                    >
                      ADD TO CART
                    </Button>
                  </div>
                </div>
                <img src="assets/slider2.png" alt="" />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant="ghost"
        className="hover:bg-accent/60 left-1 size-10"
      />
      <CarouselNext
        variant="ghost"
        className="hover:bg-accent/60 right-1 size-10"
      />
    </Carousel>
  );
}
export default Slider;
