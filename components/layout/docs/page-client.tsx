"use client";

import {
  type ComponentProps,
  Fragment,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {  ChevronLeft, ChevronRight, Text } from "lucide-react";
import Link from "fumadocs-core/link";
import { cn } from "../../../lib/cn";
import { useI18n } from "fumadocs-ui/contexts/i18n";
import { useTreeContext, useTreePath } from "fumadocs-ui/contexts/tree";
import type * as PageTree from "fumadocs-core/page-tree";
import { createContext, usePathname } from "fumadocs-core/framework";
import {
  type BreadcrumbOptions,
  getBreadcrumbItemsFromPath,
} from "fumadocs-core/breadcrumb";
import { useNav } from "fumadocs-ui/contexts/layout";
import { isActive } from "../../../lib/is-active";
import { useEffectEvent } from "fumadocs-core/utils/use-effect-event";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../ui/collapsible";
import { useSidebar } from "fumadocs-ui/contexts/sidebar";
import { useTOCItems } from "../../ui/toc";
import { useActiveAnchor } from "fumadocs-core/toc";
import useIsMobile from "@/hooks/useIsMobile";

const TocPopoverContext = createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>("TocPopoverContext");

export function PageTOCPopoverTrigger(props: ComponentProps<"button">) {
  const { text } = useI18n();
  const { open } = TocPopoverContext.use();
  const items = useTOCItems();
  const active = useActiveAnchor();
  const selected = useMemo(
    () => items.findIndex((item) => active === item.url.slice(1)),
    [items, active]
  );
  const showItem = selected !== -1 && !open;

  return (
    <CollapsibleTrigger
      {...props}
      className={cn(
        "flex w-full h-(--fd-tocnav-height) items-center text-sm text-fd-muted-foreground gap-2.5 px-4 py-2.5 text-start focus-visible:outline-none [&_svg]:size-4 md:px-6 ",
        props.className
      )}
    >
      <Text className="size-4 shrink-0 text-foreground" />
      <span className="text-foreground text-nowrap">{text.toc}</span>
      <ChevronRight
        className={cn(
          "size-4 shrink-0 text-fd-muted-foreground transition-all",
          open ? "rotate-90" : "-ms-1.5"
        )}
      />
      <span
        className={cn(
          "truncate text-fd-muted-foreground transition-opacity -ms-1.5",
          (!showItem || open) && "opacity-0"
        )}
      >
        {items[selected]?.title}
      </span>
    </CollapsibleTrigger>
  );
}

interface ProgressCircleProps
  extends Omit<React.ComponentProps<"svg">, "strokeWidth"> {
  value: number;
  strokeWidth?: number;
  size?: number;
  min?: number;
  max?: number;
}

function clamp(input: number, min: number, max: number): number {
  if (input < min) return min;
  if (input > max) return max;
  return input;
}

export function PageTOCPopoverContent(props: ComponentProps<"div">) {
  return (
    <CollapsibleContent
      data-toc-popover=""
      {...props}
      className={cn("flex flex-col px-4 max-h-[50vh] md:px-6", props.className)}
    >
      {props.children}
    </CollapsibleContent>
  );
}

export function PageTOCPopover(props: ComponentProps<"div">) {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const { collapsed } = useSidebar();
  const { isTransparent } = useNav();

  const onClick = useEffectEvent((e: Event) => {
    if (!open) return;

    if (ref.current && !ref.current.contains(e.target as HTMLElement))
      setOpen(false);
  });

  useEffect(() => {
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);
  const { isMobile } = useIsMobile();
  const TOCItems = useTOCItems();

  return (
    <TocPopoverContext.Provider
      value={useMemo(
        () => ({
          open,
          setOpen,
        }),
        [setOpen, open]
      )}
    >
      <Collapsible open={open} onOpenChange={setOpen} asChild>
        <div
          className="sticky overflow-visible z-10 xl:hidden h-10 w-full"
          style={{
            ...props.style,
            top: `calc(var(--fd-banner-height) + var(--fd-nav-height) + ${
              !isMobile && TOCItems.length > 0 ? "61.8px" : "0px"
            })`,
            insetInlineStart: collapsed
              ? "0px"
              : "calc(var(--fd-sidebar-width) + var(--fd-layout-offset))",
            insetInlineEnd: 0,
          }}
        >
          <header
            ref={ref}
            id="nd-tocnav"
            {...props}
            className={cn(
              "fixed pr-(--removed-body-scroll-bar-size,0) z-10 border-b backdrop-blur-sm transition-colors xl:hidden max-xl:on-root:[--fd-tocnav-height:40px] w-full ",
              (!isTransparent || open) && "bg-fd-background/80",
              open && "shadow-lg",
              props.className
            )}
          >
            {props.children}
          </header>
        </div>
      </Collapsible>
    </TocPopoverContext.Provider>
  );
}

export function PageLastUpdate({
  date: value,
  ...props
}: Omit<ComponentProps<"p">, "children"> & { date: Date | string }) {
  const { text } = useI18n();
  const [date, setDate] = useState("");

  useEffect(() => {
    // to the timezone of client
    setDate(new Date(value).toLocaleDateString());
  }, [value]);

  return (
    <p
      {...props}
      className={cn("text-sm text-fd-muted-foreground", props.className)}
    >
      {text.lastUpdate} {date}
    </p>
  );
}

type Item = Pick<PageTree.Item, "name" | "description" | "url">;
export interface FooterProps extends ComponentProps<"div"> {
  /**
   * Items including information for the next and previous page
   */
  items?: {
    previous?: Item;
    next?: Item;
  };
}

function scanNavigationList(tree: PageTree.Node[]) {
  const list: PageTree.Item[] = [];

  tree.forEach((node) => {
    if (node.type === "folder") {
      if (node.index) {
        list.push(node.index);
      }

      list.push(...scanNavigationList(node.children));
      return;
    }

    if (node.type === "page" && !node.external) {
      list.push(node);
    }
  });

  return list;
}

const listCache = new Map<string, PageTree.Item[]>();

export function PageFooter({ items, ...props }: FooterProps) {
  const { root } = useTreeContext();
  const pathname = usePathname();

  const { previous, next } = useMemo(() => {
    if (items) return items;

    const cached = listCache.get(root.$id);
    const list = cached ?? scanNavigationList(root.children);
    listCache.set(root.$id, list);

    const idx = list.findIndex((item) => isActive(item.url, pathname, false));

    if (idx === -1) return {};
    return {
      previous: list[idx - 1],
      next: list[idx + 1],
    };
  }, [items, pathname, root]);

  return (
    <div
      {...props}
      className={cn(
        "@container grid gap-4 pb-6",
        previous && next ? "grid-cols-2" : "grid-cols-1",
        props.className
      )}
    >
      {previous ? <FooterItem item={previous} index={0} /> : null}
      {next ? <FooterItem item={next} index={1} /> : null}
    </div>
  );
}

function FooterItem({ item, index }: { item: Item; index: 0 | 1 }) {
  const { text } = useI18n();
  const Icon = index === 0 ? ChevronLeft : ChevronRight;

  return (
    <Link
      href={item.url}
      className={cn(
        "flex flex-col gap-2 rounded-lg border p-4 text-sm transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground @max-lg:col-span-full",
        index === 1 && "text-end"
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-1.5 font-medium",
          index === 1 && "flex-row-reverse"
        )}
      >
        <Icon className="-mx-1 size-4 shrink-0 rtl:rotate-180" />
        <p>{item.name}</p>
      </div>
      <p className="text-fd-muted-foreground truncate">
        {item.description ?? (index === 0 ? text.previousPage : text.nextPage)}
      </p>
    </Link>
  );
}

export type BreadcrumbProps = BreadcrumbOptions & ComponentProps<"div">;

export function PageBreadcrumb({
  includeRoot,
  includeSeparator,
  includePage,
  ...props
}: BreadcrumbProps) {
  const path = useTreePath();
  const { root } = useTreeContext();
  const items = useMemo(() => {
    return getBreadcrumbItemsFromPath(root, path, {
      includePage,
      includeSeparator,
      includeRoot,
    });
  }, [includePage, includeRoot, includeSeparator, path, root]);

  if (items.length === 0) return null;

  return (
    <div
      {...props}
      className={cn(
        "flex items-center gap-1.5 text-sm text-fd-muted-foreground",
        props.className
      )}
    >
      {items.map((item, i) => {
        const className = cn(
          "truncate",
          i === items.length - 1 && "text-fd-primary font-medium"
        );

        return (
          <Fragment key={i}>
            {i !== 0 && <ChevronRight className="size-3.5 shrink-0" />}
            {item.url ? (
              <Link
                href={item.url}
                className={cn(className, "transition-opacity hover:opacity-80")}
              >
                {item.name}
              </Link>
            ) : (
              <span className={className}>{item.name}</span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

export function PageTOC(props: ComponentProps<"div">) {
  const { collapsed } = useSidebar();
  const offset = collapsed ? "0px" : "var(--fd-layout-offset)";

  return (
    <div
      id="nd-toc"
      {...props}
      className={cn(
        "fixed bottom-0 pt-12 pb-2 pr-(--removed-body-scroll-bar-size,0) max-xl:hidden",
        props.className
      )}
      style={{
        ...props.style,
        top: "calc(var(--fd-banner-height) + var(--fd-nav-height) + 50px)",
        insetInlineEnd: `max(${offset}, calc(50vw - var(--fd-sidebar-width)/2 - var(--fd-page-width)/2))`,
      }}
    >
      <div className="flex h-full w-(--fd-toc-width) max-w-full flex-col pe-4">
        {props.children}
      </div>
    </div>
  );
}
