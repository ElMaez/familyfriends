import Image from "next/image";
import Placeholder from "../../app/img/download.png";

import Button from "./Button";

const Slider = () => {
  return (
    <section className="pt-4 overflow-x-scroll ">
      <div className="flex flex-row gap-4 w-[500px]">
        <Button
          styling=""
          size="md"
          isfilled={true}
          isStroke={false}
          color="primary"
          text="Alle"
          icon=""
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
          styling=""
          size="md"
          isfilled={false}
          isStroke={true}
          color=""
          text="Katte"
          icon=""
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
          styling=""
          size="md"
          isfilled={false}
          isStroke={true}
          color="primary"
          text="Hunde"
          icon=""
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
      </div>
    </section>
  );
};

export default Slider;
