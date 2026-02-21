import { blogs } from "@/lib/source";
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { AvatarStack } from "../kibo-ui/avatar-stack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import { formatBlogDate } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { Route } from "next";

export default function BlogsPage() {
  const posts = blogs.getPages().sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
  return (
    <main className="relative mx-auto  px-4 md:px-10 py-10 md:py-20 flex flex-col gap-12 md:gap-20">
      <header>
        <h1 className="font-semibold text-4xl md:text-5xl tracking-tighter capitalize">
          The latest trends, updates, and tools
        </h1>
        <p className="mt-2 text-muted-foreground text-lg">
          Stay up-to-date with insights from our team and community experts.
        </p>
      </header>
      <section className=" grid grid-cols-1  gap-5 ">
        {posts.map((post) => (
          <Link href={post.url as Route} key={post.url}>
            <Card
              key={post.absolutePath}
              className="  md:flex-row hover:bg-accent-foreground/10 transition-all duration-300 rounded cursor-pointer py-0 gap-0 shadow-none group from-card via-card to-accent-foreground/10 bg-linear-to-br"
            >
              {post.data?.image && (
                <div className="relative w-full md:w-2/5 lg:w-1/3 h-60 md:h-48 lg:h-56">
                  <Image
                    src={post.data.image}
                    alt={post.data.title}
                    fill
                    className="rounded-md object-cover bg-linear-to-br from-primary via-primary/50 to-muted-foreground  transition-colors"
                  />
                </div>
              )}

              <div className="flex flex-col justify-between w-full">
                <CardContent className="flex flex-col gap-3 py-6 w-full">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.data.tags.map((tag, idx) => (
                        <Badge className="rounded" key={idx}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs opacity-50">
                      {formatBlogDate(post.data.date)}
                    </p>
                  </div>

                  <h1 className="text-xl font-semibold">{post.data.title}</h1>
                  <p className="text-md text-muted-foreground line-clamp-3 max-w-2xl">
                    {post.data.description}
                  </p>
                </CardContent>

                {/* --- FOOTER avec les avatars à droite --- */}
                <CardFooter className="flex items-center justify-between px-6 pb-4">
                  <AvatarStack>
                    {post.data.authors.map((author, idx) => (
                      <Avatar key={idx}>
                        <AvatarImage src={author.avatar} />
                        <AvatarFallback>
                          {author.name.toUpperCase().slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </AvatarStack>

                  {/* Icône qui apparaît au survol de la carte */}
                  <ArrowUpRight className="size-10 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100  text-primary transition-all duration-500" />
                </CardFooter>
              </div>
            </Card>
          </Link>
        ))}
      </section>
    </main>
  );
}
