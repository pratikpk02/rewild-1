import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceGrid() {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {experiences.map((item, index) => (
        <ExperienceCard
          key={item.title}
          {...item}
          index={index}
        />
      ))}
    </div>
  );
}