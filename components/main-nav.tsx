"use client";

import Link from "next/link";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MainNav = () => {
  const pathname = usePathname();
  const links = ["blog", "about"];

  return (
    <div className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      {links.map((link) => (
        <Link
          key={link}
          href={`/${link}`}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
            pathname === `/${link}` ? "text-foreground" : "text-foreground/60"
          )}
        >
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </Link>
      ))}
    </div>
  );
};

export default MainNav;
