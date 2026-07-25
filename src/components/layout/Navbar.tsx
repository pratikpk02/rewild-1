"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/shared/Button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="leading-none">
            <div className="font-[family:var(--font-cormorant)] text-[2.1rem] font-semibold tracking-[0.18em]">
                REWILD
            </div>

            <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/70">
                Nature • Movement • Connection
            </p>
        </Link>

        {/* Desktop */}

        <nav className="hidden items-center gap-10 md:flex">

          <a
            href="#about"
            className="text-sm tracking-wide text-white/80 transition-colors duration-300 hover:text-white"
          >
          About
          </a>

          <a
            href="#experience"
            className="text-sm tracking-wide text-white/80 transition-colors duration-300 hover:text-white"
          >
            Experience
          </a>

          <a
            href="#gallery"
            className="text-sm tracking-wide text-white/80 transition-colors duration-300 hover:text-white"
          >
            Gallery
          </a>

          <a
            href="#faq"
            className="text-sm tracking-wide text-white/80 transition-colors duration-300 hover:text-white"
          >
            FAQ
          </a>

          <Button>Reserve Spot</Button>

        </nav>

        {/* Mobile */}

        <button className="md:hidden">
          <Menu size={28} />
        </button>

      </div>
    </header>
  );
}