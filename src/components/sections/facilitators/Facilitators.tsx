import { Section, Container } from "@/components/shared";
import FacilitatorsHeader from "./FacilitatorsHeader";
import FacilitatorsGrid from "./FacilitatorsGrid";

export default function Facilitators() {
  return (
    <Section
      id="facilitators"
      className="bg-white py-32 md:py-40"
    >
      <Container>
        <FacilitatorsHeader />
        <FacilitatorsGrid />
      </Container>
    </Section>
  );
}