"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";
import FAQItem from "./FAQItem";

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-20 max-w-4xl">
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.question}
          {...faq}
          index={index}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
}