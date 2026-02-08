import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-primary-foreground flex w-full items-center lg:justify-center">
        <div className="mx-10 flex max-w-[1050px] flex-col gap-4 py-10 lg:w-full lg:flex-row lg:justify-between">
          <div className="h3">Bandage</div>
          <ul className="text-primary-color flex gap-5">
            <li className="">
              <a href="">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="">
                <Twitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="mx-10 flex max-w-[1050px] flex-col items-center gap-20 py-20"></div>
      </div>
      <div className="flex items-center justify-center">
        <div className="mx-10 flex max-w-[1050px] flex-col items-center gap-20 py-20"></div>
      </div>
    </div>
  );
};

export default Footer;
