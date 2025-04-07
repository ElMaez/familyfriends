import Image from "next/image";
import ViewCard from "@/components/(singleview)/ViewCard";
import SingleInfo from "@/components/(singleview)/SingleInfo";
import Button from "@/components/(global)/Button";

export default function Home() {
  return (
    <main>
      <h1>Single View</h1>
      <ViewCard></ViewCard>
      <SingleInfo></SingleInfo>
      <Button></Button>
    </main>
  );
}
