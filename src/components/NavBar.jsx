import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";

const NavBar = ({ className, shopMenu, bigMenu }) => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className={className}>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className={bigMenu}>
          <NavigationMenuLink asChild>
            <Link to="/shop">Shop</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className={shopMenu}>
          <NavigationMenuTrigger className="link text-second-text-color">
            <NavigationMenuLink asChild>
              <Link to="/shop">Shop</Link>
            </NavigationMenuLink>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="text-second-text-color link flex gap-10">
              <div>
                <span className="text-text-color p-2">Kadın</span>
                <ul>
                  <li>
                    <NavigationMenuLink>
                      <a href="">Bags</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <a href="">Belts</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <a href="">Cosmetics</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <a href="">Bags</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <a href="">Hats</a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </div>
              <div>
                <span className="text-text-color p-2">Erkek</span>
                <ul>
                  <li>
                    <NavigationMenuLink>
                      <a href="">Bags</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <a href="">Belts</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <a href="">Cosmetics</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <a href="">Bags</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <a href="">Hats</a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/blog">Blog</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/contact">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/pages">Pages</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
