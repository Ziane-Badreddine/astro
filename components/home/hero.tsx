import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Route } from "next";

export default function Hero() {
  return (
    <section className="relative isolate  rounded-4xl  py-4 sm:py-8 md:py-10 lg:py-16 ">
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `
        linear-gradient(to right, var(--foreground) 1px, transparent 1px),
        linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)
      `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 0% 0%, var(--background) 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 0% 0%, var(--background) 50%, transparent 90%)",
        }}
      />
      <div className="container relative z-10 grid gap-8 sm:gap-12 md:gap-16 pt-[var(--fd-nav-height)]">
        <div className="mx-auto flex flex-col justify-center gap-6 text-balance">
          <h1 className="mb-0 text-balance text-center font-semibold text-4xl tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl from-foreground via-foreground/90 to-foreground/70 bg-gradient-to-r bg-clip-text text-transparent">
            Learn Modern <br /> <span className="text-primary">Tutorials </span>{" "}
            &<span className="text-primary"> Crash Courses</span>
          </h1>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-0 mb-0 text-muted-foreground  lg:text-base xl:text-lg 2xl:text-xl leading-relaxed">
              Jump into coding with practical tutorials and quick crash courses.
              Learn JavaScript, Python, C++, Java, and the frameworks and APIs
              that power modern development.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link href={"/docs" as Route}>
              <Button size="lg" className="cursor-pointer rounded-full ">
                Start Learning
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
            <Link href={"/blogs" as Route}>
              <Button
                variant={"outline"}
                size="lg"
                className="cursor-pointer rounded-full"
              >
                Read Tech News
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_30%,var(--accent-foreground),transparent_25%)] blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_70%,var(--accent),transparent_10%)] blur-3xl"></div>
    </section>
  );
}
