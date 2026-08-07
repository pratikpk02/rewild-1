import { Container, Section } from "@/components/shared";
import FAQHeader from "./FAQHeader";
import FAQList from "./FAQList";
import FAQFooter from "./FAQFooter";

export default function FAQ() {
  return (
    <Section
      id="faq"
      className="bg-stone-50 py-32 md:py-40"
    >
      <Container>
        <FAQHeader />

        <FAQList />

        <FAQFooter />
      </Container>
    </Section>
  );
}