"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared";

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="max-w-xl"
    >
      <SectionHeader
        align="left"
        eyebrow="About REWILD"
        title={
          <>
            A Return to
            <br />
            What Matters
          </>
        }
      >
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
      </SectionHeader>
    </motion.div>
  );
}