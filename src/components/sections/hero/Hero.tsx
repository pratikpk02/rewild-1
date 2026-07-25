import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <HeroBackground />

      <HeroContent />

      <ScrollIndicator />

    </section>
  );
}