import React from "react";
import BestSellerProduct from "./BestSellerProduct";

const BestSeller = () => {
  return (
    <div className="flex justify-center">
      <div className="flex max-w-[1050px] flex-col items-center justify-center gap-12 py-20">
        <div className="mx-10 flex max-w-[250px] flex-col gap-4 text-center">
          <div className="h4 text-second-text-color">Featured Products</div>
          <div className="h3 text-text-color">BESTSELLER PRODUCTS</div>
          <div className="paragraph text-second-text-color">
            Problems trying to resolve the conflict between{" "}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-7">
          {Array.from({ length: 8 }).map((_, index) => (
            <BestSellerProduct key={index} imgLink="/assets/product.png" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
