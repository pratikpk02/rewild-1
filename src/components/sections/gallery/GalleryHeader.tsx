import { SectionHeader } from "@/components/shared";

export default function GalleryHeader() {
  return (
    <SectionHeader
      eyebrow="A Glimpse Into REWILD"
      title={
        <>
          Moments That
          <br />
          Stay With You
        </>
      }
    >
      <p>
        From sunrise movement sessions and quiet forest walks to shared meals
        and unforgettable conversations, every moment is designed to reconnect
        you with yourself, nature and the people around you.
      </p>
    </SectionHeader>
  );
}