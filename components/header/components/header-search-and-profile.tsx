"use client";

import { useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Calculator,
  Calendar,
  CircleUserRoundIcon,
  CreditCard,
  Search,
  Settings,
  ShoppingBag,
  Smile,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/separator";
import Link from "next/link";

export function HeaderSearchAndProfile() {
  return (
    <div className="flex items-center gap-2">
      <SearchInput />
      <Separator className="h-6 mx-2 bg-white" />
      <Link href={"#"}>
        <Button variant={"ghost"} size={"icon"} className="rounded-full">
          <ShoppingBag className="!size-5" />
        </Button>
      </Link>
      <Link href={"#"}>
        <Button variant={"ghost"} size={"icon"} className="rounded-full p-0.5">
          <CircleUserRoundIcon className="!size-5" />
        </Button>
      </Link>
    </div>
  );
}

function SearchInput() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setSearchModalOpen(true)}
        size={"icon"}
        className="rounded-full"
        variant={"ghost"}
      >
        <Search className="!size-5" />
      </Button>
      <CommandDialog open={searchModalOpen} onOpenChange={setSearchModalOpen}>
        <DialogTitle className="sr-only">Pesquisa de produtos</DialogTitle>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
