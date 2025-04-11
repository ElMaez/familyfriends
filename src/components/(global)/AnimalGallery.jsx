import { getAnimals } from "@/lib/api";
import AnimalCard from "./AnimalCard";

const AnimalGallery = async () => {
  const animals = await getAnimals();

  return (
  {
    animals.map((animal) => {
      // du destructorer ved at bruge en spread oporator foran animal
      <div>
      <AnimalCard {...animal}></AnimalCard>
      </div>
    });
  }
);
};
export default AnimalGallery;
