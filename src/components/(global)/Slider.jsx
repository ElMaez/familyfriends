import Image from "next/image";
import Placeholder from "../../app/img/download.png"


import Button from "./Button";

const Slider = () => {
  return <section className="pt-4 pb-6 overflow-x-scroll">
    <div className="flex flex-row gap-4 w-[500px]">
    <Button
  size="md"
  isfilled={true}
  isStroke={false}
  color="primary"
  text="Alle"
  img={
   <Image
     className="rounded-full"
     width={40}
     height={40}
     alt="det er en kat"
     src={Placeholder}
   ></Image>
     }
     
   ></Button>
   <Button
  size="md"
  isfilled={false}
  isStroke={true}
  color=""
  text="Katte"
  img={
   <Image
     className="rounded-full"
     width={40}
     height={40}
     alt="det er en kat"
     src={Placeholder}
   ></Image>
     }
     
   ></Button>
   <Button
  size="md"
  isfilled={false}
  isStroke={true}
  color="primary"
  text="Hunde"
  img={
   <Image
     className="rounded-full"
     width={40}
     height={40}
     alt="det er en kat"
     src={Placeholder}
   ></Image>
     }
     
   ></Button></div>
   </section>;
};

export default Slider;
