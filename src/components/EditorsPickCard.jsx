import React from "react";
import { Button } from "./ui/button";
const menImage = "assets/men.png";

const EditorsPickCard = ({ buttonName, imgsrc }) => {
  return (
    <div
      className="relative h-full w-full flex-1 bg-cover bg-center"
      style={{ backgroundImage: `url('${imgsrc}')` }}
    >
      <Button
        variant={"secondary"}
        size={"lg"}
        className="tex-base text-text-color absolute bottom-2 left-2 rounded-none font-bold"
      >
        {buttonName}
      </Button>
    </div>
  );
};

export default EditorsPickCard;
