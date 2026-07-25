import React from "react";

type Props = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
};

export function SectionHeading({ title, subtitle, className = "" }: Props) {
  return (
    <header className={`mb-6 ${className}`}>
      <h2 className="text-2xl font-semibold">{title}</h2>
      {subtitle ? <p className="mt-2 text-sm text-neutral-600">{subtitle}</p> : null}
    </header>
  );
}

export default SectionHeading;
