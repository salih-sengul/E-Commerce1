import React from "react";
import EditorsPickCard from "./EditorsPickCard";

const EditorsPick = () => {
  return (
    <div className="bg-sidebar flex justify-center py-20">
      <div className="mx-10 flex w-full max-w-[1050px] flex-col gap-12">
        <div className="flex flex-col items-center">
          <div className="h3 text-text-color">EDITOR'S PICK</div>
          <div className="paragraph text-second-text-color">
            Problems trying to resolve the conflict between{" "}
          </div>
        </div>
        <div className="flex w-full flex-col gap-7 lg:max-w-none lg:flex-row">
          <div className="h-[500px] w-full lg:flex-2">
            <EditorsPickCard buttonName="MEN" imgsrc="assets/men.png" />
          </div>

          <div className="h-[500px] w-full lg:flex-1">
            <EditorsPickCard buttonName="WOMEN" imgsrc="assets/women.png" />
          </div>

          <div className="flex h-[500px] w-full flex-col gap-4 lg:flex-1">
            <EditorsPickCard
              buttonName="ACCESORIES"
              imgsrc="assets/accesories.png"
            />
            <EditorsPickCard buttonName="KIDS" imgsrc="assets/kids.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
