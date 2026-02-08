import { ButtonGroupInput } from "@/components/ButtonGroupInput";
import JoinUs from "@/components/JoinUs";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import React, { useState } from "react";

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
      <div className="flex w-full items-center justify-center lg:justify-center">
        <div className="mx-10 flex max-w-[1050px] flex-col gap-8 py-20 lg:w-full lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-5">
            <div className="h5">Company Info</div>
            <div className="link text-second-text-color flex flex-col gap-2.5">
              <div>About Us</div>
              <div>Carrier</div>
              <div>We are hiring</div>
              <div>Blog</div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="h5">Legal</div>
            <div className="link text-second-text-color flex flex-col gap-2.5">
              <div>About Us</div>
              <div>Carrier</div>
              <div>We are hiring</div>
              <div>Blog</div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="h5">Features</div>
            <div className="link text-second-text-color flex flex-col gap-2.5">
              <div>Business Marketing</div>
              <div>User Analytic</div>
              <div>Live Chat</div>
              <div>Unlimited Support</div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="h5">Resources</div>
            <div className="link text-second-text-color flex flex-col gap-2.5">
              <div>IOS & Android</div>
              <div>Watch a Demo</div>
              <div>Customers</div>
              <div>API</div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="h5">Get In Touch</div>
            <div className="flex flex-col gap-2.5">
              <JoinUs api={""} />
              <div className="text-second-text-color text-xs">
                Lore imp sum dolor Amit
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-foreground flex w-full items-center justify-center lg:justify-center">
        <div className="mx-10 flex max-w-[1050px] flex-col items-center gap-20 py-20">
          <div className="h6 text-second-text-color">
            Made With Love By Finland All Right Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
