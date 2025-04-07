import Image from "next/image";
import Slider from "@/components/(global)/Slider";
import AnimalGallery from "@/components/(global)/AnimalGallery";

export default function Home() {
  return (
    <main className=" col-[content] row-2">
      <h1>Family Friends</h1>
      <Slider></Slider>
      <AnimalGallery></AnimalGallery>
    </main>
  );
}
