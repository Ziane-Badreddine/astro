"use client";

import {
  SiJavascript,
  SiReact,
  SiPython,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiDjango,
} from "react-icons/si";
import { ArrowRightIcon } from "lucide-react";
import { FaJava } from "react-icons/fa";
import Link from "next/link";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "../kibo-ui/marquee";
import { Badge } from "../ui/badge";

const technologies = [
  {
    icon: SiJavascript,
    title: "JavaScript",
    description: "Langage dynamique du web moderne.",
    color: "#f7df1e",
  },
  {
    icon: SiTypescript,
    title: "TypeScript",
    description: "JavaScript typé pour des projets robustes.",
    color: "#3178c6",
  },
  {
    icon: SiReact,
    title: "React",
    description: "Bibliothèque pour créer des interfaces interactives.",
    color: "#61dafb",
  },
  {
    icon: SiNextdotjs,
    title: "Next.js",
    description: "Framework React pour le rendu côté serveur et statique.",
    color: "#000000",
  },
  {
    icon: SiTailwindcss,
    title: "Tailwind CSS",
    description: "Framework CSS utilitaire pour un design rapide et élégant.",
    color: "#38bdf8",
  },
  {
    icon: SiPython,
    title: "Python",
    description: "Langage polyvalent et populaire pour l’IA et la data.",
    color: "#3776ab",
  },
  {
    icon: FaJava,
    title: "Java",
    description:
      "Langage orienté objet pour les applications multiplateformes.",
    color: "#e11f21",
  },
  {
    icon: SiNodedotjs,
    title: "Node.js",
    description: "JavaScript côté serveur, rapide et scalable.",
    color: "#6cc24a",
  },
  {
    icon: SiMongodb,
    title: "MongoDB",
    description: "Base de données NoSQL orientée documents.",
    color: "#47a248",
  },
  {
    icon: SiDjango,
    title: "Django",
    description: "Framework Python complet pour le développement web.",
    color: "#092e20",
  },
];

// Diviser en 2 groupes pour créer deux bandes défilantes
const groups = technologies.reduce<{ [key: number]: typeof technologies }>(
  (acc, item, index) => {
    const group = Math.floor(index / Math.ceil(technologies.length / 2));
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  },
  []
);

export const TechMarquee = () => (
  <div className="container mx-auto grid gap-8 py-6">
    <div className="grid gap-4 relative">
      <Badge className=" absolute top-0 -left-5 z-100 -rotate-20" asChild>
        <Link href="/docs">
          <span>Tutorials</span>
          <ArrowRightIcon size={16} />
        </Link>
      </Badge>
      {Object.values(groups).map((items, index) => (
        <Marquee key={index}>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent
            direction={index === 1 ? "right" : "left"}
            pauseOnHover={false}
          >
            {items.map((item) => (
              <MarqueeItem key={item.title}>
                <div className="rounded-lg border from-card via-card to-accent-foreground/10 bg-gradient-to-bl p-6 min-w-[260px] shadow-sm">
                  <div
                    className="mb-3 flex h-10 w-10 items-center justify-center rounded-md"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <item.icon size={24} color={item.color} />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      ))}
    </div>
  </div>
);
