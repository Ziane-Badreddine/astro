import Backround from "@/components/backround";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Latest updates, articles, and insights about Astro",
};

export default function BlogLayout({ children }: LayoutProps<"/blogs">) {
  return (
    <div className="relative flex  flex-col isolate">
      <Backround>
        <main className="flex-1">{children}</main>
      </Backround>
    </div>
  );
}
