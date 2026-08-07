import { gallery } from "@/data/gallery";
import GalleryItem from "./GalleryItem";

export default function GalleryGrid() {
  return (
    <div className="mt-20 grid auto-rows-[220px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
      <GalleryItem
        {...gallery[0]}
        index={0}
        className="lg:col-span-8 lg:row-span-2"
      />

      <GalleryItem
        {...gallery[1]}
        index={1}
        className="lg:col-span-4"
      />

      <GalleryItem
        {...gallery[2]}
        index={2}
        className="lg:col-span-4"
      />

      <GalleryItem
        {...gallery[3]}
        index={3}
        className="lg:col-span-7 lg:row-span-2"
      />

      <GalleryItem
        {...gallery[4]}
        index={4}
        className="lg:col-span-5"
      />

      <GalleryItem
        {...gallery[5]}
        index={5}
        className="lg:col-span-5"
      />

      <GalleryItem
        {...gallery[6]}
        index={6}
        className="lg:col-span-4"
      />

      <GalleryItem
        {...gallery[7]}
        index={7}
        className="lg:col-span-3"
      />

      <GalleryItem
        {...gallery[8]}
        index={8}
        className="lg:col-span-5 lg:row-span-2"
      />
    </div>
  );
}