import BestSeller from "@/components/BestSeller";
import ProductCard from "@/components/product/productCard";
import ProductDescription from "@/components/product/ProductDescription";
import { SlideThumbnail } from "@/components/product/SlideThumbnail";
import Companies from "@/components/shop/Companies";
import React from "react";

const ProductPage = () => {
  const img = [
    "/assets/slider2.png",
    "/assets/card-cover-20.jpg",
    "/assets/men.png",
  ];

  return (
    <>
      <div className="bg-primary-foreground">
        <div className="mx-auto flex max-w-[1050px] flex-col gap-8 px-8 py-10 lg:flex-row lg:px-0">
          <SlideThumbnail images={img} />
          <ProductCard />
        </div>
      </div>
      <div className="bg-background">
        <ProductDescription />
      </div>
      <div className="bg-primary-foreground">
        <BestSeller />
      </div>
      <Companies />
    </>
  );
};

export default ProductPage;
