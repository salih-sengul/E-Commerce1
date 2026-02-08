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
            <div className="text-light-text-color relative flex h-[753px] items-center justify-center px-13">
              <div className="absolute top-0 left-0 z-[-1] h-full w-full bg-[url('assets/slider-p1.png')] bg-cover bg-center"></div>
              <div className="flex w-full max-w-[1050px] flex-col items-center justify-center gap-12 text-center lg:items-start lg:text-left">
                <div className="h5">SUMMER 2020</div>
                <div className="h2 lg:text-[58px]">NEW COLLECTION</div>
                <div className="h4 text-primary-foreground lg:max-w-[369px]">
                  We know how large objects will act, but things on a small
                  scale.
                </div>
                <Button
                  variant={"success"}
                  size={"lg"}
                  className="font bold bg-success-color text-light-text-color rounded-none"
                >
                  SHOP NOW
                </Button>
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
