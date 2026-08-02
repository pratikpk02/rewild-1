import Navbar from "@/components/layout/Navbar";

import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Facilitators } from "@/components/sections/facilitators";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Facilitators />
      </main>
    </>
  );
}