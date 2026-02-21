import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Code2,
  Cpu,
  BookOpen,
  Globe,
  Rocket,
  Layers,
} from "lucide-react"; // icônes

const features = [
  {
    icon: Code2,
    title: "Programming Tutorials",
    description:
      "Learn popular languages like JavaScript, Python, C++, and Java through step-by-step tutorials.",
  },
  {
    icon: Layers,
    title: "Frameworks & Libraries",
    description:
      "Explore React, Node.js, Django, and other frameworks that power modern web development.",
  },
  {
    icon: Globe,
    title: "APIs & Integrations",
    description:
      "Understand how to work with REST and GraphQL APIs to connect and scale your applications.",
  },
  {
    icon: Cpu,
    title: "Crash Courses",
    description:
      "Jump into coding fast with beginner-friendly crash courses designed to help you start building now.",
  },
  {
    icon: BookOpen,
    title: "Tech Blogs",
    description:
      "Stay up-to-date with the latest trends, updates, and tools shaping the developer ecosystem.",
  },
  {
    icon: Rocket,
    title: "Hands-On Learning",
    description:
      "Build, experiment, and practice with real projects to reinforce your programming skills.",
  },
];

export default function Features() {
  return (
    <section className="container mx-auto w-full py-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, i) => {
        const Icon = feature.icon;
        return (
          <Card
            key={i}
            className="p-6 hover:shadow-lg transition-shadow duration-200 from-card via-card to-accent-foreground/10 bg-gradient-to-br"
          >
            <CardHeader className="flex flex-col items-center text-center gap-2">
             <div className="from-input to-accent bg-gradient-to-br p-3 rounded mb-3">
                 <Icon className="size-6  text-primary" />
             </div>
              <CardTitle className="text-xl font-semibold">
                {feature.title}
              </CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        );
      })}
    </section>
  );
}
