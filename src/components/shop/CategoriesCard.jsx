import React from "react";
import { cn } from "@/lib/utils";
const CategoriesCard = ({ imgsrc, stiles }) => {
  return (
    <div
      className={cn(
        "text-light-text-color flex flex-col items-center justify-center gap-8 bg-cover bg-center",
        stiles,
      )}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url('${imgsrc}')`,
      }}
    >
      <p className="h5 z-10">Cloths</p>
      <p className="h6 z-10">5 items</p>
    </div>
  );
};

export default CategoriesCard;
