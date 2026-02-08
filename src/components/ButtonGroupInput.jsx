import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";

export function ButtonGroupInput() {
  return (
    <ButtonGroup>
      <Input placeholder="Your Email" className={"h-full"} />

      <Button
        variant={"default"}
        size={"default"}
        className="bg-slider-bg hover:bg-slider-bg/80 text-light-text-color rounded-sm px-1 font-bold"
      >
        Subscribe
      </Button>
    </ButtonGroup>
  );
}
