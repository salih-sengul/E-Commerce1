import {
  Menu,
  MenuButton,
  MenuHeading,
  MenuItem,
  MenuItems,
  MenuSection,
  MenuSeparator,
} from "@headlessui/react";
import React from "react";
import { Link } from "react-router";

const DropdownMenu = () => {
  return (
    <Menu>
      <MenuButton className="link">Shop</MenuButton>
      <MenuItems anchor="bottom" className={"flex gap-2 border-0 p-4"}>
        <MenuSection className={"flex w-[186px] flex-col gap-4"}>
          <MenuHeading className="font-bold">Kadın</MenuHeading>
          <MenuItem>
            <a className="block data-focus:bg-blue-100" href="/profile">
              Bags
            </a>
          </MenuItem>
          <MenuItem>
            <a className="block data-focus:bg-blue-100" href="/notifications">
              Belts
            </a>
          </MenuItem>

          <MenuItem>
            <a className="block data-focus:bg-blue-100" href="/notifications">
              Cosmetics
            </a>
          </MenuItem>
          <MenuItem>
            <a className="block data-focus:bg-blue-100" href="/notifications">
              Bags
            </a>
          </MenuItem>
          <MenuItem>
            <a className="block data-focus:bg-blue-100" href="/notifications">
              Hats
            </a>
          </MenuItem>
        </MenuSection>
        <MenuSeparator className="my-1 h-px bg-black" />
        <MenuSection className={"flex w-[186px] flex-col gap-4"}>
          <MenuHeading className="font-bold">Erkek</MenuHeading>
          <MenuItem>
            <a className="block data-focus:bg-blue-100" href="/profile">
              Bags
            </a>
          </MenuItem>
          <MenuItem>
            <a className="block data-focus:bg-blue-100" href="/notifications">
              Belts
            </a>
          </MenuItem>
          <MenuItem>
            <a className="block data-focus:bg-blue-100" href="/notifications">
              Cosmetics
            </a>
          </MenuItem>
          <MenuItem>
            <a className="block data-focus:bg-blue-100" href="/notifications">
              Bags
            </a>
          </MenuItem>
          <MenuItem>
            <a className="block data-focus:bg-blue-100" href="/notifications">
              Hats
            </a>
          </MenuItem>
        </MenuSection>
      </MenuItems>
    </Menu>
  );
};

export default DropdownMenu;
