import CallToAction from "@/components/home/call-to-action";
import Features from "@/components/home/Features";
import { Footer } from "@/components/home/footer";
import Hero from "@/components/home/hero";
import { TechMarquee } from "@/components/home/TechMarquee";
export default function HomePage() {
  return (
    <main className=" grid w-full relative isolate min-h-screen  ">
      <Hero />
      <Features />
      <TechMarquee />
      <CallToAction />
      <Footer />
    </main>
  );
}
