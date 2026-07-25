"use client";

import { motion } from "framer-motion";
import { retreat } from "@/data/retreat";
import { Button } from "@/components/shared/Button";

export default function HeroContent() {
  return (
    <div className="relative z-10 flex h-full items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-3xl text-center"
      >
        {/* Date */}
        <p className="mb-4 uppercase tracking-[0.45em] text-white/70">
          {retreat.date}
        </p>

        {/* Brand */}
        <h1 className="font-[family:var(--font-cormorant)] text-6xl font-semibold leading-[0.95] text-white md:text-8xl">
          {retreat.brand}
        </h1>

        {/* Tagline */}
        <h2 className="mt-4 text-2xl text-white md:text-4xl">
          {retreat.tagline}
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-white/85">
          {retreat.subtitle}
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button>
            {retreat.cta}
          </Button>

          <Button variant="secondary">
            {retreat.explore}
          </Button>
        </div>

        {/* Participants */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="h-px w-16 bg-white/30" />

          <p className="text-sm uppercase tracking-[0.4em] text-white/70">
            Only {retreat.participants} Participants
          </p>
        </div>
      </motion.div>
    </div>
  );
}