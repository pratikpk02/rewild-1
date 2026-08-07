"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FAQItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
      }}
      className="border-b border-stone-200"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-8 text-left transition-colors duration-300 hover:text-[var(--forest)]"
      >
        <h3 className="font-[family:var(--font-cormorant)] text-3xl font-semibold text-[var(--forest)] md:text-4xl">
          {question}
        </h3>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{
            duration: 0.25,
          }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-300 text-3xl font-light text-[var(--forest)]"
        >
          +
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <div className="pb-8 pr-16">
              <p className="max-w-3xl text-lg leading-9 text-stone-600">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}