import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// export const libreCaslonText = Libre_Caslon_Text({
//   subsets: ["latin"],
//   weight: ["400", "700"], // optional: choose weights available for the font
//   display: "swap", // improves performance
//   style: "normal",
// });

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = "https://astro.vercel.app";

export const metadata: Metadata = {
  title: {
    template: "%s | astro",
    default: "Astro",
  },
  description:
    "Jump into coding with practical tutorials and quick crash courses. Learn JavaScript, Python, C++, Java, and the frameworks and APIs that power modern development.",
  keywords:
    "programming tutorials, crash courses, JavaScript, Python, C++, Java, React, Node.js, Django, APIs, GraphQL, Hands-on learning, web development, Learn Modern",
  authors: [{ name: "Ziane Badreddine", url: siteUrl }],
  creator: "Ziane Badreddine",
  publisher: "Ziane Badreddine",
  robots: "index, follow",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Learn Modern | Tutorials & Crash Courses",
    description:
      "Practical tutorials, crash courses, and hands-on coding exercises to learn modern programming, frameworks, and APIs fast.",
    url: siteUrl,
    siteName: "Learn Modern",
    images: [
      {
        url: `${siteUrl}/images/learn-modern-og.png`,
        width: 1200,
        height: 630,
        alt: "Learn Modern – Programming Tutorials & Crash Courses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Modern | Tutorials & Crash Courses",
    description:
      "Learn popular programming languages, frameworks, and APIs through tutorials, crash courses, and hands-on projects.",
    images: [`${siteUrl}/images/learn-modern-og.png`],
    creator: "@EddineZian27143",
  },
  metadataBase: new URL(siteUrl),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};
export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="darkreader-lock" />
      </head>
      <body
        className={`bg-background  relative antialiased `}
        suppressHydrationWarning
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
