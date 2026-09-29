import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { ProductSection } from "@/components/ProductSection";
import { HowIWork } from "@/components/HowIWork";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Playground } from "@/components/Playground";
import { Thinking } from "@/components/Thinking";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <ProductSection />
      <HowIWork />
      <Experience />
      <About />
      <Playground />
      <Thinking />
      <Contact />
    </>
  );
}
