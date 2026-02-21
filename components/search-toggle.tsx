"use client";
import type { ComponentProps } from "react";
import { Search } from "lucide-react";
import { useSearchContext } from "fumadocs-ui/contexts/search";
import { useI18n } from "fumadocs-ui/contexts/i18n";
import { cn } from "../lib/cn";
import { Button, buttonVariants } from "./ui/button";
import { VariantProps } from "class-variance-authority";
import { Kbd } from "./ui/kbd";

interface SearchToggleProps
  extends
    Omit<ComponentProps<"button">, "color">,
    VariantProps<typeof buttonVariants> {
  hideIfDisabled?: boolean;
}

export function SearchToggle({
  hideIfDisabled,
  size = "icon-sm",
  variant = "ghost",
  ...props
}: SearchToggleProps) {
  const { setOpenSearch, enabled } = useSearchContext();
  if (hideIfDisabled && !enabled) return null;

  return (
    <button
      type="button"
      className={cn(
        buttonVariants({
          size,
          variant,
        }),
        props.className,
      )}
      data-search=""
      aria-label="Open Search"
      onClick={() => {
        setOpenSearch(true);
      }}
    >
      <Search />
    </button>
  );
}

export function LargeSearchToggle({
  hideIfDisabled,
  ...props
}: ComponentProps<"button"> & {
  hideIfDisabled?: boolean;
}) {
  const { enabled, hotKey, setOpenSearch } = useSearchContext();
  const { text } = useI18n();
  if (hideIfDisabled && !enabled) return null;

  return (
    <Button
      type="button"
      data-search-full=""
      {...props}
      className={cn(
        "relative text-muted-foreground hover:text-primary justify-start rounded shadow-none cursor-pointer w-52",
        props.className,
      )}
      size={"sm"}
      variant="outline"
      onClick={() => {
        setOpenSearch(true);
      }}
    >
      <Search className="size-4" />
      {text.search}
      <span className="-translate-y-1/2 absolute top-1/2 right-1.5 flex items-center gap-0.5">
        {hotKey.map((k, i) => (
          <Kbd key={i} className="border bg-background">
            {k.display}
          </Kbd>
        ))}
      </span>
    </Button>
  );
}
