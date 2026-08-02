"use client";

import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="max-w-xl"
    >
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-[var(--forest)]">
        About REWILD
      </p>

      <h2 className="mt-4 font-[family:var(--font-cormorant)] text-5xl font-semibold leading-[1.08] text-[var(--forest)] md:text-6xl">
        A Return to
        <br />
        What Matters
      </h2>

      <div className="mt-8 h-px w-16 bg-[var(--forest)]/30" />

      <div className="mt-8 space-y-6 text-lg leading-9 text-stone-600">
        <p>
          In a world that constantly demands your attention, REWILD is an
          invitation to slow down.
        </p>

        <p>
          Over two carefully curated days, you'll step away from screens,
          schedules and expectations to reconnect through movement, nature,
          meaningful conversations and shared experiences.
        </p>

        <p>
          This isn't about escaping life. It's about returning to it with
          greater clarity, presence and intention.
        </p>
      </div>
    </motion.div>
  );
}