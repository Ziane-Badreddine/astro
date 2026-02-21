import React from "react";
import Link from "next/link";
import Backround from "../backround";
import { SiHtml5 } from "react-icons/si";
import { Route } from "next";

export function CrashCoursesList() {
  // Tableau statique des crash courses
  const crashCourses = [
    {
      id: "html",
      title: "HTML",
      description: "Learn the basics of HTML for web development.",
      icon: <SiHtml5 />,
      url: "/docs/crash-courses/html",
    },
    // {
    //   id: "css",
    //   title: "CSS",
    //   description: "Master CSS styling and layouts.",
    //   icon: <SiCss3 />,
    //   url: "/docs/crash-courses/css",
    // },
    // {
    //   id: "javascript",
    //   title: "JavaScript",
    //   description: "Understand core JS concepts for modern apps.",
    //   icon: <SiJavascript />,
    //   url: "/docs/crash-courses/javascript",
    // },
  ];

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
      {crashCourses.map((course) => (
        <Backround key={course.id}>
          <Link
            href={course.url as Route}
            className="bg-primary/5 text-surface-foreground hover:bg-surface/80 flex w-full flex-col items-center rounded-xl p-5 transition-colors sm:p-10 border no-underline!"
          >
            {/* Icône */}
            <div className="text-primary/90 flex items-center justify-center">
              {React.cloneElement(course.icon, {
                className: "size-12 text-primary shrink-0",
              })}
            </div>

            {/* Titre */}
            <span className="text-base mt-3 font-medium">{course.title}</span>
          </Link>
        </Backround>
      ))}
    </div>
  );
}
