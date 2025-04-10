import Image from "next/image";

import Menu from "@/components/(global)/Menu";

import Slider from "@/components/(global)/Slider";
import AnimalGallery from "@/components/(global)/AnimalGallery";

export default function Home() {
  return (
    <main>
      <h1>Favorites</h1>
      <Slider></Slider>
      <AnimalGallery></AnimalGallery>
      <Menu></Menu>
    </main>
  );
}
