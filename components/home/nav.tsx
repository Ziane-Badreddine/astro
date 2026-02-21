"use client";

import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";
import { Logo } from "../logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { SiGithub } from "react-icons/si";
import { LargeSearchToggle } from "../search-toggle";
import { Route } from "next";

type LinksProps = {
  className: string;
};

export const Nav = () => (
  <div className="fixed hidden  inset-x-0 top-(--fd-banner-height) z-40 border-b md:flex items-center justify-between bg-fd-background/80 px-4 py-2.5 backdrop-blur-sm transition-colors ">
    <div className="flex items-center justify-center gap-1">
      <Link
        className="rounded-xl pr-3 md:px-3 py-1.5 hover:bg-primary/10  "
        href="/"
      >
        <Logo />
      </Link>
      <Links className="hidden  md:flex mt-0.5" />
    </div>

    <div className="hidden items-center gap-1.5 md:flex">
      <LargeSearchToggle className="max-w-60" />
      <Link href={"/"}>
        <Button
          size={"sm"}
          variant={"outline"}
          className="flex shadow-none cursor-pointer hover:text-primary  flex-row items-center empty:hidden"
        >
          {" "}
          <SiGithub />
        </Button>
      </Link>
      <ThemeToggle />
    </div>
  </div>
);

const Links = ({ className }: LinksProps) => {
  const pathname = usePathname();

  const links = [
    {
      label: "Docs",
      href: `/docs`,
      active: pathname.startsWith(`/docs`),
    },
    {
      label: "Blogs",
      href: `/blogs`,
      active: pathname.startsWith(`/blogs`),
    },
    {
      label: "Community",
      href: `/community`,
      active: pathname.startsWith(`/community`),
    },
  ];

  return (
    <div className={cn(" items-center  h-7 flex", className)}>
      {links.map((link) => (
        <Link
          className={cn(
            "h-auto bg-transparent  text-muted-foreground hover:bg-primary/10  px-3 py-2 rounded-xl  shadow-none transition-all",
            link.active && " text-primary  ",
          )}
          href={link.href as Route}
          key={link.href}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};
