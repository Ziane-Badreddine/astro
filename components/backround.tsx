import React from "react";

export default function Backround({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full relative isolate ">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="bg-primary/10 absolute top-0 right-0 size-80 translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
        <div className="bg-secondary/10 absolute bottom-0 left-0 size-80 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl" />
      </div>
      {children}
    </div>
  );
}
