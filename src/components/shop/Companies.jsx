import React from "react";

const Companies = () => {
  return (
    <div className="bg-primary-foreground py-40 lg:px-0 lg:py-13">
      <div className="mx-auto flex max-w-[1050px] flex-col items-center gap-15 lg:flex-row lg:justify-between lg:gap-0">
        <img src="assets/hooli.svg" alt="hooli" className="w-36" />
        <img src="assets/lyft.svg" alt="" className="w-36" />
        <img src="assets/robinhood.svg" alt="" className="w-36" />
        <img src="assets/stripe.svg" alt="" className="w-36" />
        <img src="assets/aws.svg" alt="" className="w-36" />
        <img src="assets/reddit.svg" alt="" className="w-36" />
      </div>
    </div>
  );
};

export default Companies;
