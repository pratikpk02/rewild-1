import { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  children,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`${
        isCenter ? "mx-auto max-w-3xl text-center" : "max-w-xl text-left"
      }`}
    >
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-[var(--forest)]">
        {eyebrow}
      </p>

      <h2 className="mt-4 font-[family:var(--font-cormorant)] text-5xl font-semibold leading-[1.08] text-[var(--forest)] md:text-6xl">
        {title}
      </h2>

      <div
        className={`mt-8 h-px w-16 bg-[var(--forest)]/30 ${
          isCenter ? "mx-auto" : ""
        }`}
      />

      <div className="mt-8 space-y-6 text-lg leading-9 text-stone-600">
        {children}
      </div>
    </div>
  );
}