import { SectionHeader } from "@/components/shared";

export default function ExperienceHeader() {
  return (
    <SectionHeader
      eyebrow="The REWILD Experience"
      title={
        <>
          Every Moment
          <br />
          Has a Purpose
        </>
      }
    >
      <p>
        Every activity is thoughtfully designed to help you slow down,
        reconnect with nature, and rediscover a sense of presence through
        movement, reflection and shared experiences.
      </p>
    </SectionHeader>
  );
}