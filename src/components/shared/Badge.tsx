import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className = "" }: Props) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-sm ${className}`}>
      {children}
    </span>
  );
}

export default Badge;
