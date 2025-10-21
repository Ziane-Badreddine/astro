import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-8  rounded-b-[56px]  px-8 py-16 md:px-16 text-center relative isolate">
      <div
        className="absolute inset-0 -z-1 rounded-t-lg rounded-b-[56px] px-8"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 10%, var(--primary) 40%, var(--accent-foreground) 100%)
      `,
          backgroundSize: "100% 100%",
        }}
      />

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
        Ready to Start Your Coding Journey?
      </h1>
      <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
        Learn programming step by step with tutorials, crash courses, and tech
        news. Explore languages, frameworks, and APIs to build real-world
        projects.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Link href="/docs">
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full h-12 px-8 text-base cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
          >
            Start Learning
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </Link>
      </div>
      
    </div>
  );
}
