import Image from "next/image";
import ViewCard from "@/components/(singleview)/ViewCard";
import SingleInfo from "@/components/(singleview)/SingleInfo";
import Button from "@/components/(global)/Button";

import { getSingleAnimal } from "@/lib/api";

export default async function Home({ params }) {
  const { id } = await params;
  const animal = await getSingleAnimal(id);
  console.log("animal params: ", animal, id);
  return (
    <main className="">
      <ViewCard {...animal} />
      <SingleInfo {...animal} animaldata={animal} />
      <Button
        styling="w-full justify-center"
        size="sm"
        isfilled={true}
        isStroke={false}
        color="primary"
        text={`Adopter ${animal.name}`}
        icon=""
        img=""
      ></Button>
    </main>
  );
}
