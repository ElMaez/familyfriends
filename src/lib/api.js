export async function getAnimals() {
  const data = await fetch(process.env.ANIMALS_URL, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });

  const animals = await data.json();
  console.log("animals: ", animals);

  return animals.animals;
}
