import Image from "next/image";

import Menu from "@/components/(global)/Menu";
import Slider from "@/components/(global)/Slider";
import AnimalGallery from "@/components/(global)/AnimalGallery";
import RemoteImage from "@/components/(api)/Sandbox";

export default async function Home() {
  const data = await fetch("https://api.petfinder.com/v2/animals", {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });
  const animals = await data.json();
  console.log(animals);

  return (
    <main className="h-svh">
      <Slider></Slider>
      <AnimalGallery></AnimalGallery>
      <Menu></Menu>
    </main>
  );
}
