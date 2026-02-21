import { HomeLayout } from "@/components/layout/home"
import { baseOptions } from "@/lib/layout.shared";
import { AlbumIcon } from "lucide-react";
import { RiUserCommunityFill } from "react-icons/ri";
import { SiReadthedocs } from "react-icons/si";


export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout
      links={[
        {
          icon: <SiReadthedocs />,
          text: "Docs",
          url: "/docs",
          // secondary items will be displayed differently on navbar
          secondary: false,
        },
        {
          icon: <AlbumIcon />,
          text: "Blogs",
          url: "/blogs",
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
