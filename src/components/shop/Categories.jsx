import React from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  const dummyData = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col gap-4 py-9 lg:flex-row">
      {dummyData.map((item, index) => {
        console.log(index);
        return (
          <CategoriesCard
            key={index}
            imgsrc="assets/card-cover-5.png"
            stiles="h-[300px] w-full lg:h-[200px]"
          />
        );
      })}
    </div>
  );
};

export default Categories;
