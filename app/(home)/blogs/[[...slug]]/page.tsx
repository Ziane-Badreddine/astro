import BlogsPage from "@/components/blogs/blogs-page";
import { AvatarStack } from "@/components/kibo-ui/avatar-stack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { blogs, getPageImage } from "@/lib/source";
import { absoluteUrl } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getMDXComponents } from "@/mdx-components";
import { Route } from "next";

const metaTitle = "Blogs | astro";
const metaDescription = "Latest changes , fixes and updates.";
const ogImage = "https://astro.com/release-og/changelog-og.png";

export default async function page({
  params,
}: PageProps<"/blogs/[[...slug]]">) {
  const { slug } = await params;
  if (!slug) {
    return <BlogsPage />;
  }
  const page = blogs.getPage(slug);
  if (!page) {
    notFound();
  }
  const MDX = page.data?.body;
  const { title, description } = page.data;
  return (
    <div className="relative  ">
      <div className="relative mx-auto max-w-4xl px-4 md:px-0 pb-24 pt-12">
        <h1 className="text-center text-3xl md:text-5xl font-semibold tracking-tighter">
          {title}
        </h1>
        {description && (
          <p className="mt-3 text-center text-muted-foreground">
            {description}
          </p>
        )}
        <div className="my-2 flex items-center justify-center gap-3">
          <AvatarStack>
            {page.data.authors.map((author, idx) => (
              <Tooltip key={idx}>
                <TooltipTrigger>
                  <Avatar>
                    <AvatarImage src={author.avatar} />
                    <AvatarFallback>
                      {author.name.toUpperCase().slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{author.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </AvatarStack>
        </div>
        <div className="w-full  flex items-center gap-2 my-4 mb-8">
          <div className="flex items-center gap-2 opacity-80">
            <ArrowLeftIcon className="size-4" />
            <Link href={"/blogs" as Route} className="">
              Blogs
            </Link>
          </div>
          <hr className="h-px bg-foreground w-full  bg-fo opacity-80" />
        </div>

        <article className="prose prose-neutral dark:prose-invert mx-auto max-w-4xl ">
          <MDX
            components={getMDXComponents({
              // this allows you to link to other pages with relative file paths
              // a: createRelativeLink(source, page),
            })}
          />
        </article>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return blogs.generateParams();
}

export async function generateMetadata({
  params,
}: PageProps<"/blogs/[[...slug]]">) {
  const { slug } = await params;
  if (!slug) {
    return {
      metadataBase: new URL("https://astro.dev/blogs"),
      title: metaTitle,
      description: metaDescription,
      openGraph: {
        title: metaTitle,
        description: metaDescription,
        images: [
          {
            url: ogImage,
          },
        ],
        url: "https://astro.dev/blogs",
      },
      twitter: {
        card: "summary_large_image",
        title: metaTitle,
        description: metaDescription,
        images: [ogImage],
      },
    };
  }
  const page = blogs.getPage(slug);
  if (page == null) notFound();

  return {
    title: `${page.data.title} | blogs | astro`,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
