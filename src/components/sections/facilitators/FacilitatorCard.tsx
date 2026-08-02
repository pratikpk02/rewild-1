"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  name: string;
  role: string;
  image: string;
  bio: string;
  index: number;
};

export default function FacilitatorCard({
  name,
  role,
  image,
  bio,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      className="group overflow-hidden rounded-3xl bg-stone-50 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative h-[420px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--forest)]/70">
          {role}
        </p>

        <h3 className="mt-3 font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--forest)]">
          {name}
        </h3>

        <p className="mt-5 leading-8 text-stone-600">
          {bio}
        </p>
      </div>
    </motion.div>
  );
}