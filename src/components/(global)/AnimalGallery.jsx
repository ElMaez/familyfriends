import { getAnimals } from "@/lib/api";
import AnimalCard from "./AnimalCard";

const AnimalGallery = async () => {
  const animals = await getAnimals();
  return (
    <div className=" grid grid-cols-2 gap-4 pt-4 mr-4">
      {animals.map((animal) => {
        // du destructorer ved at bruge en spread oporator foran animal
        return <AnimalCard key={animal.id} {...animal} />;
      })}
    </div>
  );
};
export default AnimalGallery;
