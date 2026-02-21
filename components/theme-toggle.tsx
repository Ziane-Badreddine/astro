"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useI18n } from "fumadocs-ui/provider";
import useIsMobile from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";
export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const context = useI18n();
  const { isMobile } = useIsMobile();

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newTheme = theme === "dark" ? "light" : "dark";

    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Position de l'onde (clic souris ou centre par défaut)
    const x = e.clientX || window.innerWidth / 2;
    const y = e.clientY || window.innerHeight / 2;
    root.style.setProperty("--x", `${x}px`);
    root.style.setProperty("--y", `${y}px`);

    if (!document.startViewTransition || prefersReducedMotion) {
      setTheme(newTheme);
      return;
    }

    document.startViewTransition(() => {
      setTheme(newTheme);
    });
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size="sm"
          variant={isMobile ? "ghost" : "outline"}
          onClick={toggleTheme}
          className={cn(
            " shadow-none cursor-pointer",
            !isMobile && "hover:text-primary",
          )}
        >
          <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{context.text.chooseTheme}</p>
      </TooltipContent>
    </Tooltip>
  );
}
