import React from "react";
import VisitCard from "./VisitCard";
import { MapPin, Phone, Send } from "lucide-react";

const VisitContact = () => {
  return (
    <div className="bg-primary-foreground flex flex-col items-center gap-15 py-18">
      <div className="flex max-w-[633px] flex-col gap-2.5">
        <h6 className="h6">VISIT OUR OFFICE</h6>
        <h2 className="h2">We help small businesses with big ideas</h2>
      </div>
      <div className="flex flex-col justify-center gap-8 lg:flex-row">
        <VisitCard phone={<Phone className="text-slider-bg size-18" />} />
        <VisitCard phone={<MapPin className="text-slider-bg size-18" />} />
        <VisitCard phone={<Send className="text-slider-bg size-18" />} />
      </div>
    </div>
  );
};

export default VisitContact;
