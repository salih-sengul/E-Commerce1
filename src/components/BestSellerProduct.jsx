import React from "react";

const BestSellerProduct = ({ imgLink }) => {
  return (
    <div className="flex h-[615px] flex-col items-center lg:max-w-[240px]">
      <img src={imgLink} alt="" className="h-[427px] object-cover" />
      <div className="flex flex-col items-center gap-3 p-7">
        <div className="h5 text-text-color">Graphic Design</div>
        <div className="link text-second-text-color">English Department</div>
        <div className="h5 flex gap-2">
          <span className="text-gray-500">$16.48</span>
          <span className="text-green-500">$6.48</span>
        </div>
        <div className="flex justify-center gap-1">
          <div className="size-4 rounded-full bg-blue-600"></div>
          <div className="size-4 rounded-full bg-green-900"></div>
          <div className="size-4 rounded-full bg-amber-800"></div>
          <div className="size-4 rounded-full bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerProduct;
