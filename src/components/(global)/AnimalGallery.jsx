import AnimalCard from "./AnimalCard"

const AnimalGallery = () => {
  return (
  <div className="grid grid-cols-2 gap-4 mr-4">
    <AnimalCard></AnimalCard>
    <AnimalCard></AnimalCard>
    <AnimalCard></AnimalCard>
    <AnimalCard></AnimalCard>
    </div>
    );
};

export default AnimalGallery;
