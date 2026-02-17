import BestSellerProduct from "@/components/BestSellerProduct";
import PaginationShop from "@/components/PaginationShop";
import SelectFilter from "@/components/SelectFilter";
import Categories from "@/components/shop/categories";
import Companies from "@/components/shop/Companies";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Rows4 } from "lucide-react";
import React from "react";

const ShopPage = () => {
  return (
    <>
      <div className="bg-primary-foreground px-10 lg:px-0">
        <div className="mx-auto flex max-w-[1050px] flex-col">
          <h1 className="h3 mx-auto flex flex-col items-center py-14">Shop</h1>
          <Categories />
        </div>
      </div>
      <div className="bg-background px-10 lg:px-0">
        <div className="mx-auto flex max-w-[1050px] flex-col items-center gap-6 py-6 lg:flex-row lg:flex-wrap lg:justify-between lg:gap-7">
          <div className="h6 text-second-text-color">
            Showing all 12 results
          </div>
          <div className="flex items-center gap-4">
            <p className="h6 text-second-text-color">Views:</p>
            <Button
              className={
                "bg-light-text-color text-text-color border-text-color border-0.5"
              }
            >
              <LayoutGrid />
            </Button>
            <Button
              className={
                "bg-light-text-color text-text-color border-text-color"
              }
            >
              <Rows4 />
            </Button>
          </div>
          <div className="flex gap-4">
            <SelectFilter />
            <Button className={"bg-primary-color"}>Filter</Button>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1050px] flex-col py-12 lg:flex-row lg:flex-wrap lg:gap-7">
          {Array.from({ length: 8 }).map((_, index) => (
            <BestSellerProduct key={index} imgLink="/assets/product.png" />
          ))}
        </div>
        <div className="mx-auto flex max-w-[1050px] flex-col pb-12 lg:flex-row lg:flex-wrap lg:gap-7">
          <PaginationShop />
        </div>
      </div>
      <Companies />
    </>
  );
};

export default ShopPage;
