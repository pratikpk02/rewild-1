import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full px-6 py-3 font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-[var(--forest)] text-white hover:scale-105 hover:bg-[var(--forest-light)]"
          : "border border-white/50 bg-white/10 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-[var(--forest)]",
        className
      )}
      {...props}
    />
  );
}

export default Button;