import Link from "next/link";
import { HeaderNavigation } from "./components/header-navigation";
import { HeaderSearchAndProfile } from "./components/header-search-and-profile";

export function Header() {
  return (
    <header className=" w-full z-50 bg-transparent border-b border-white text-white fixed top-0 border-foreground">
      <div className="px-4 py-6 mx-auto max-w-7xl flex items-center justify-between">
        <Link className="uppercase text-xl" href={"/"}>
          SOLENN
        </Link>
        <HeaderNavigation />
        <HeaderSearchAndProfile />
      </div>
    </header>
  );
}
