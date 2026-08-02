"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl"
    >
      <Image
        src="/images/about/about.jpg"
        alt="Walking through the forest"
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
      />
    </motion.div>
  );
}