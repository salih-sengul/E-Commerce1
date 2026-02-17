import { MenuButton, Menu, MenuItems, MenuItem } from "@headlessui/react";
import {
  Camera,
  ChevronRight,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MenuIcon,
  Phone,
  Search,
  ShoppingCart,
  Twitter,
  User,
  Youtube,
} from "lucide-react";
import React, { useState } from "react";
import DropdownMenu from "../components/DropdownMenu";
import NavBar from "../components/NavBar";
import { BreadCrumb } from "@/components/BreadCrumb";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-text-color text-light-text-color">
        <div className="lg: mx-auto hidden h-[58px] max-w-[1440px] items-center justify-between p-6 text-sm font-semibold lg:flex">
          <div className="flex gap-4">
            <div className="flex gap-1">
              <Phone />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex gap-1">
              <Mail />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>
          <div>Follow Us and get a chance to win 80% off</div>
          <div className="flex gap-4">
            Follow Us :
            <ul className="flex items-center gap-2">
              <li>
                <a href="">
                  <Instagram />
                </a>
              </li>
              <li>
                <a href="">
                  <Youtube />
                </a>
              </li>
              <li>
                <a href="">
                  <Facebook />
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
      </div>

      <div className="mx-auto flex max-w-[1440px] justify-between p-9 lg:p-6">
        <h3 className="w-[187px]">Bandage</h3>

        <div className="hidden w-full justify-end lg:flex lg:justify-between">
          <div className="lg:inline">
            <NavBar bigMenu="hidden" />
          </div>

          <div>
            <div className="lg:text-primary-color flex items-center gap-6">
              <div className="flex items-center gap-2 p-1">
                <User className="rounded-full hover:bg-gray-300 lg:size-4" />
                <a href="" className="text-primary-color link hidden lg:inline">
                  Login / Register
                </a>
              </div>
              <div className="rounded-full p-1 hover:bg-gray-300">
                <Search className="lg:size-4" />
              </div>
              <div className="flex items-center rounded-full p-1 hover:bg-gray-300 md:flex md:gap-1">
                <ShoppingCart className="lg:size-4" />
                <span className="hidden lg:inline">1</span>
              </div>

              <div className="hidden items-center rounded-full p-1 hover:bg-gray-300 md:gap-1 lg:flex">
                <Heart className="lg:size-4" />
                <span className="hidden lg:inline">1</span>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-full p-1 hover:bg-gray-300 lg:hidden"
        >
          <MenuIcon />
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] justify-between px-9 pb-1.5 lg:px-6">
        <BreadCrumb />
      </div>
      <div
        className={`text-second-text-color ${
          menuOpen ? "flex" : "hidden"
        } justify-center py-24 text-3xl transition-all lg:hidden`}
      >
        <div className="flex flex-col items-center gap-6">
          <div className="lg:inline">
            <NavBar className="flex flex-col" shopMenu="hidden" />
          </div>

          <div>
            <div className="text-primary-color flex flex-col items-center gap-6">
              <div className="flex items-center gap-2 p-1">
                <User className="rounded-full hover:bg-gray-300 lg:size-4" />
                <a href="" className="text-primary-color link lg:inline">
                  Login / Register
                </a>
              </div>
              <div className="rounded-full p-1 hover:bg-gray-300">
                <Search className="lg:size-4" />
              </div>
              <div className="flex items-center rounded-full p-1 hover:bg-gray-300 md:flex md:gap-1">
                <ShoppingCart className="lg:size-4" />
                <span className="lg:inline">1</span>
              </div>

              <div className="flex items-center rounded-full p-1 hover:bg-gray-300 md:gap-1 lg:flex">
                <Heart className="lg:size-4" />
                <span className="lg:inline">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
