import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  async rewrites() {
    return [
      {
        source: "/docs/:path*.mdx",
        destination: "/llms.mdx/:path*",
      },
    ];
  },
  reactStrictMode: true,
  serverExternalPackages: ["typescript", "twoslash"],
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "assets.aceternity.com",
      },
      {
        hostname: "pbs.twimg.com",
      },
      {
        hostname: "github.com",
      },
      {
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
    ],
  },
  typedRoutes: true,
};

export default withMDX(config);
