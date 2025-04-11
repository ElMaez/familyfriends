import Image from "next/image";
import ViewCard from "@/components/(singleview)/ViewCard";
import SingleInfo from "@/components/(singleview)/SingleInfo";
import Button from "@/components/(global)/Button";

export default function Home() {
  return (
    <main className="">
      <ViewCard></ViewCard>
      <SingleInfo></SingleInfo>
      <Button
        styling="w-full justify-center"
        size="sm"
        isfilled={true}
        isStroke={false}
        color="primary"
        text="Adopter Samojed Willie"
        icon=""
        img=""
      ></Button>
    </main>
  );
}
