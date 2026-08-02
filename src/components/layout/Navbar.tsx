"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/shared/Button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 120);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = scrolled
    ? "text-sm tracking-wide text-[var(--forest)]/80 transition-colors duration-300 hover:text-[var(--forest)]"
    : "text-sm tracking-wide text-white/80 transition-colors duration-300 hover:text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--cream)]/90 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link href="/" className="leading-none">
          <div
            className={`font-[family:var(--font-cormorant)] text-[2.1rem] font-semibold tracking-[0.18em] transition-colors duration-500 ${
              scrolled ? "text-[var(--forest)]" : "text-white"
            }`}
          >
            REWILD
          </div>

          <p
            className={`mt-1 text-[10px] uppercase tracking-[0.3em] transition-colors duration-500 ${
              scrolled
                ? "text-[var(--forest)]/70"
                : "text-white/70"
            }`}
          >
            Nature • Movement • Connection
          </p>
        </Link>

        {/* Desktop */}

        <nav className="hidden items-center gap-10 md:flex">
          <a href="#about" className={navLinkClass}>
            About
          </a>

          <a href="#experience" className={navLinkClass}>
            Experience
          </a>

          <a href="#gallery" className={navLinkClass}>
            Gallery
          </a>

          <a href="#faq" className={navLinkClass}>
            FAQ
          </a>

          <Button>Reserve Spot</Button>
        </nav>

        {/* Mobile Toggle */}

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`transition-colors duration-500 md:hidden ${
            scrolled ? "text-[var(--forest)]" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.25 }}
              className="absolute left-4 right-4 top-24 z-50 rounded-3xl border border-white/10 bg-black/70 p-6 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <nav className="flex flex-col gap-6">
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-white/90 transition hover:text-white"
                >
                  About
                </a>

                <a
                  href="#experience"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-white/90 transition hover:text-white"
                >
                  Experience
                </a>

                <a
                  href="#gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-white/90 transition hover:text-white"
                >
                  Gallery
                </a>

                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-white/90 transition hover:text-white"
                >
                  FAQ
                </a>

                <Button
                  className="mt-2 w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Reserve Spot
                </Button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}