import React from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Eye, Heart, ShoppingCart } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="flex flex-col gap-5 p-6">
      <div className="h4 text-text-color">Floating Phone</div>
      <div className="flex gap-3">
        <div>reviev stars</div>
        <div className="h6 text-second-text-color">12 reviews</div>
      </div>
      <div>
        <div className="h3 text-text-color">$1,139.33</div>
        <div className="flex gap-1">
          <p className="h6 text-second-text-color">Avalibilty:</p>
          <p className="h6 text-primary-color">In Stock</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="paragraph text-second-text-color">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </div>
        <Separator />
        <div className="flex gap-1">
          <div className="size-7 rounded-full bg-blue-600"></div>
          <div className="size-7 rounded-full bg-green-900"></div>
          <div className="size-7 rounded-full bg-amber-800"></div>
          <div className="size-7 rounded-full bg-black"></div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button className={"rounded-sm"}>Select Options</Button>

        <div className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm">
          <ShoppingCart className="size-5" />
        </div>
        <div className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm">
          <Heart className="size-5" />
        </div>
        <div className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm">
          <Eye className="size-5" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
