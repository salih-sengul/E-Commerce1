import React from "react";
import { FeaturedProduct } from "./FeaturedProduct";

export const FeaturedProducts = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mx-10 flex max-w-[1050px] flex-col items-center gap-20 py-20">
        <div className="flex max-w-[261px] flex-col gap-2.5 text-center lg:max-w-[450px]">
          <div className="h6 text-primary-color">Practice Advice</div>
          <div className="h2">Featured Products</div>
          <div className="paragraph text-second-text-color">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
          {Array.from({ length: 3 }).map((_, index) => (
            <FeaturedProduct />
          ))}
        </div>
      </div>
    </div>
  );
};
