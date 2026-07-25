import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-7xl px-6 md:px-10 lg:px-16 ${className ?? ""}`}
    >
      {children}
    </section>
  );
}