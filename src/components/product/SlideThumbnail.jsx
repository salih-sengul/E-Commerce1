import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function SlideThumbnail({ images }) {
  const [api, setApi] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => api.off("select", onSelect);
  }, [api]);

  const handleClick = (index) => {
    if (!api) return;
    api.scrollTo(index);
  };
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-10 space-y-4 lg:gap-5">
      <Carousel
        setApi={(embla) => {
          console.log("EMBLA:", embla);
          setApi(embla);
        }}
        opts={{ loop: false }}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className="h-[277px] lg:h-[450px] lg:w-[500px]"
            >
              <div className="aspect-square overflow-hidden rounded-xl">
                <img src={src} alt="" className="h-full w-full object-cover" />
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

      <div className="flex h-[75px] gap-2">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={cn(
              "h-full w-[100px] overflow-hidden rounded border-2",
              selectedIndex === index
                ? "border-primary"
                : "border-transparent opacity-60",
            )}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
