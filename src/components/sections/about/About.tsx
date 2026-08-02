import { Container, Section } from "@/components/shared";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <Section
      id="about"
      className="bg-[var(--cream)] py-32 md:py-40"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <AboutContent />
          <AboutImage />
        </div>
      </Container>
    </Section>
  );
}