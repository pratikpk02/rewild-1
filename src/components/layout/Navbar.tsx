"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="leading-none">
            <div className="font-[family:var(--font-cormorant)] text-3xl font-semibold tracking-[0.18em]">
                REWILD
            </div>

            <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-neutral-500">
                Nature • Movement • Connection
            </p>
        </Link>

        {/* Desktop */}

        <nav className="hidden items-center gap-8 md:flex">

          <a href="#about">About</a>

          <a href="#experience">Experience</a>

          <a href="#gallery">Gallery</a>

          <a href="#faq">FAQ</a>

          <button className="rounded-full bg-green-900 px-6 py-3 text-white transition hover:scale-105">
            Reserve Spot
          </button>

        </nav>

        {/* Mobile */}

        <button className="md:hidden">
          <Menu size={28} />
        </button>

      </div>
    </header>
  );
}