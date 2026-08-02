import { Container, Section } from "@/components/shared";
import ExperienceGrid from "./ExperienceGrid";
import ExperienceHeader from "./ExperienceHeader";

export default function Experience() {
  return (
    <Section
      id="experience"
      className="bg-[var(--cream)] py-32 md:py-40"
    >
      <Container>
        <ExperienceHeader />
        <ExperienceGrid />
      </Container>
    </Section>
  );
}