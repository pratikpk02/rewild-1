import { Container, Section } from "@/components/shared";
import GalleryHeader from "./GalleryHeader";
import GalleryIntro from "./GalleryIntro";
import GalleryGrid from "./GalleryGrid";

export default function Gallery() {
  return (
    <Section
      id="gallery"
      className="bg-white py-32 md:py-40"
    >
      <Container>
        <GalleryHeader />

        <GalleryIntro />

        <GalleryGrid />
      </Container>
    </Section>
  );
}