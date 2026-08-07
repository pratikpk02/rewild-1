import { SectionHeader } from "@/components/shared";

export default function FAQHeader() {
  return (
    <SectionHeader
      eyebrow="Frequently Asked Questions"
      title={
        <>
          Everything You Need
          <br />
          Before You Join
        </>
      }
    >
      <p>
        If you still have questions, you'll likely find the answer below. And if
        not, we're always happy to help.
      </p>
    </SectionHeader>
  );
}