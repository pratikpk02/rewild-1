"use client";

import { motion } from "framer-motion";
import {
  Trees,
  Dumbbell,
  Waves,
  Flame,
  Smartphone,
  MoonStar,
} from "lucide-react";

const icons = {
  trees: Trees,
  dumbbell: Dumbbell,
  waves: Waves,
  flame: Flame,
  smartphone: Smartphone,
  moonstar: MoonStar,
};

type Props = {
  icon: keyof typeof icons;
  title: string;
  description: string;
  index: number;
};

export default function ExperienceCard({
  icon,
  title,
  description,
  index,
}: Props) {
  const Icon = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="group rounded-3xl border border-stone-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="mb-6 inline-flex rounded-2xl bg-[var(--forest)]/10 p-4">
        <Icon
          size={28}
          className="text-[var(--forest)] transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <h3 className="font-[family:var(--font-cormorant)] text-3xl font-semibold text-[var(--forest)]">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-stone-600">
        {description}
      </p>
    </motion.div>
  );
}