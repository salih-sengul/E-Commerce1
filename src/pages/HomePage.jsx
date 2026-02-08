import BestSeller from "@/components/BestSeller";
import { Collection } from "@/components/Collection";
import EditorsPick from "@/components/EditorsPick";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import Gemini from "@/components/gemini";
import Slider from "@/components/Slider";

import Slider2 from "@/components/Slider2";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="bg-slider-bg">
        <div className="mx-auto max-w-[1440px]">
          <Slider />
        </div>
      </div>
      <EditorsPick />
      <BestSeller />
      <div className="bg-secondary-color-1">
        <div className="mx-auto max-w-[1440px]">
          <Slider2 />
        </div>
      </div>
      <Collection />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
