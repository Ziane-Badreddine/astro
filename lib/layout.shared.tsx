import { Logo } from "@/components/logo";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { AlbumIcon, BookIcon } from "lucide-react";
import { CgCommunity } from "react-icons/cg";
import { RiUserCommunityFill } from "react-icons/ri";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
    },

    // see https://fumadocs.dev/docs/ui/navigation/links
   
    githubUrl: "https://github.com",
  };
}
