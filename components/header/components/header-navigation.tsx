import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

function NavigationMenuDropdown() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="text-sm h-fit34i12sASDFGHYJUIKOLPÇ´~[
          ]] bg-transparent px-2 py-1 rounded hover:bg-white/20 hover:text-white"
          >
            Categorias
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-72 z-50">
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function HeaderNavigation() {
  return (
    <nav className="flex items-center gap-6">
      <NavigationMenuDropdown />
      <Link
        className="text-sm px-2 py-1 rounded font-medium bg-transparent transition-all hover:bg-white/20 hover:text-white"
        href={"#"}
      >
        Latest products
      </Link>
      <Link
        className="text-sm px-2 py-1 rounded font-medium bg-transparent transition-all hover:bg-white/20 hover:text-white"
        href={"#"}
      >
        Our colection
      </Link>
      <Link
        className="text-sm px-2 py-1 rounded font-medium bg-transparent transition-all hover:bg-white/20 hover:text-white"
        href={"#"}
      >
        About us
      </Link>
    </nav>
  );
}
