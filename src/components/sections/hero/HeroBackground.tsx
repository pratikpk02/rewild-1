import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      <Image
        src="/images/hero/hero.jpg"
        alt="Forest Retreat"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-[28vh] bg-gradient-to-b from-transparent via-[rgba(245,242,234,0.15)] to-[var(--cream)]" />
    </>
  );
}