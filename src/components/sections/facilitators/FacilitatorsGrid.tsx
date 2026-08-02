import { facilitators } from "@/data/facilitators";
import FacilitatorCard from "./FacilitatorCard";

export default function FacilitatorsGrid() {
  return (
    <div className="mt-20 grid gap-10 lg:grid-cols-3">
      {facilitators.map((person, index) => (
        <FacilitatorCard
          key={person.name}
          {...person}
          index={index}
        />
      ))}
    </div>
  );
}