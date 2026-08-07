import Navbar from "@/components/layout/Navbar";

import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Facilitators } from "@/components/sections/facilitators";
import { Gallery } from "@/components/sections/gallery";
import { FAQ } from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Facilitators />
        <Gallery />
        <FAQ />
      </main>
    </>
  );
}