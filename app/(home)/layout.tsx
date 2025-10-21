import { HomeLayout } from "@/components/layout/home"
import { baseOptions } from "@/lib/layout.shared";
import { AlbumIcon, BookIcon } from "lucide-react";
import { RiUserCommunityFill } from "react-icons/ri";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout
      links={[
        {
          icon: <BookIcon />,
          text: "Docs",
          url: "/docs",
          // secondary items will be displayed differently on navbar
          secondary: false,
        },
        {
          icon: <AlbumIcon />,
          text: "Blog",
          url: "/blog",
          // secondary items will be displayed differently on navbar
          secondary: false,
        },
        {
          icon: <RiUserCommunityFill />,
          text: "Community",
          url: "/community",
          // secondary items will be displayed differently on navbar
          secondary: false,
        },
      ]}
      {...baseOptions()}
    >
      {children}
    </HomeLayout>
  );
}
