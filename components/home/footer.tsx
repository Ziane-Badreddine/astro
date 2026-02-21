import Link from "next/link";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import { blogs, source } from "@/lib/source";
import { Logo } from "../logo";
import { Route } from "next";
const pages = source.getPages();
const docs = source.getPages().slice(0, 5);
const Blogs = blogs.getPages().slice(0, 5);

export function Footer() {
  return (
    <footer className="bg-background/95 w-full border-t backdrop-blur-sm relative isolate mt-16">
      <div
        className="absolute inset-0  -z-10 opacity-30"
        style={{
          backgroundImage: `
        linear-gradient(to right, var(--foreground) 1px, transparent 1px),
        linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)
      `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
        }}
      />
      <div className="container mx-auto flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="col-span-2 max-w-md space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <Logo />
            </Link>
            <p className="text-muted-foreground text-sm">
              Empower your coding journey — discover tutorials, frameworks, and
              tools to help you learn, build, and grow as a developer.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaGithub className="size-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaDiscord className="size-5" />
                <span className="sr-only">Discord</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaTwitter className="size-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold">Docs</h4>
            <ul className="space-y-2 text-sm">
              {docs.map((page) => (
                <li key={page.url}>
                  <Link
                    className="text-muted-foreground transition-colors hover:text-primary truncate line-clamp-1 "
                    href={page.url as Route}
                  >
                    {page.data.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold">Blogs</h4>
            <ul className="space-y-2 text-sm">
              {Blogs.map((page) => (
                <li key={page.url}>
                  <Link
                    className="text-muted-foreground transition-colors hover:text-primary truncate line-clamp-1"
                    href={page.url as Route}
                  >
                    {page.data.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t pt-6 text-center text-xs text-muted-foreground">
          {" "}
          © {new Date().getFullYear()} astro — Made with{" "}
          <span className="text-red-500">❤️</span> and{" "}
          <span className="text-amber-600">☕</span> by{" "}
          <a
            href="https://github.com/Ziane-Badreddine"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            @Ziane-Badreddine
          </a>
        </div>
      </div>
    </footer>
  );
}
