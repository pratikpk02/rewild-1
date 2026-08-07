"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  image: string;
  title: string;
  subtitle: string;
  index: number;
  className?: string;
};

export default function GalleryItem({
  image,
  title,
  subtitle,
  index,
  className = "",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className={`group relative overflow-hidden rounded-[2rem] ${className}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width:768px) 100vw,
               (max-width:1024px) 50vw,
               33vw"
        className="object-cover transition-all duration-[900ms] ease-out group-hover:scale-105 group-hover:brightness-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent transition-all duration-700 group-hover:from-black/60 group-hover:via-black/20 group-hover:to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-8 text-white">
        <p className="text-xs uppercase tracking-[0.35em] text-white/70">
          REWILD
        </p>

        <h3 className="mt-3 font-[family:var(--font-cormorant)] text-4xl font-semibold">
          {title}
        </h3>

        <p className="mt-3 max-w-sm translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-sm leading-7 text-white/90">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}