import React from "react";
import { Button } from "../ui/button";

const VisitCard = ({ phone }) => {
  return (
    <div className="hover:bg-dark-card-bg flex max-w-[327px] flex-col items-center gap-4 bg-white px-10 py-12.5 transition-all hover:flex-1 hover:text-white">
      {phone}
      <div>
        <h6>georgia.young@example.com</h6>
        <h6>georgia.young@ple.com</h6>
      </div>
      <h5>Get Support</h5>
      <Button>
        <h6>Submit Request</h6>
      </Button>
    </div>
  );
};

export default VisitCard;
