import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import Link from "next/link";
import { cn } from "./lib/utils";
import { ExternalLink } from "lucide-react";
import React from "react";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Pre } from "fumadocs-ui/components/codeblock";
import { File, Folder, Files } from "fumadocs-ui/components/files";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { Mermaid } from "@/components/mdx/mermaid";
import * as Twoslash from "fumadocs-twoslash/ui";
import { CrashCoursesList } from "@/components/docs/crash-courses-list";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Mermaid,
    ...Twoslash,
    img: (props) => (
      <ImageZoom
        className="border border-primary outline-offset-2 "
        {...(props as any)}
      />
    ),
    a: ({ className, href, children, ...props }: any) => {
      const isExternal =
        typeof href === "string" && /^(https?:)?\/\//.test(href);
      const classes = cn(
        "inline-flex items-center gap-1 font-medium underline ",
        className,
      );
      if (isExternal) {
        return (
          <a
            className={classes}
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            {...props}
          >
            {children}
            <ExternalLink className="ms-0.5 inline size-[0.9em] text-fd-muted-foreground" />
          </a>
        );
      }
      return (
        <Link className={classes} href={href} {...(props as any)}>
          {children}
        </Link>
      );
    },
    Link: ({ className, href, children, ...props }: any) => {
      const isExternal =
        typeof href === "string" && /^(https?:)?\/\//.test(href);
      const classes = cn(
        "inline-flex items-center gap-1 font-medium underline  ",
        className,
      );
      if (isExternal) {
        return (
          <a
            className={classes}
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            {...props}
          >
            {children}
            <ExternalLink className="ms-0.5 inline  size-[0.9em] text-fd-muted-foreground" />
          </a>
        );
      }
      return (
        <Link className={classes} href={href} {...(props as any)}>
          {children}
        </Link>
      );
    },
    Step,
    Steps,
    File,
    Folder,
    Files,
    Tab,
    Tabs,
    Pre: Pre,
    TypeTable,
    Accordion,
    Accordions,
    CrashCoursesList,

    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "border-l-4 border-primary/80! bg-primary/5 py-2 px-4 italic text-lg text-muted-foreground rounded-md my-3",
          className,
        )}
        {...props}
      />
    ),

    ...components,
  };
}
