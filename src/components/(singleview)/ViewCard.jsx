import Image from "next/image";
import Placeholder from "../../app/img/download.png";

import Button from "../(global)/Button";
import { GrFormPrevious } from "react-icons/gr";
import { CiStar } from "react-icons/ci";

const ViewCard = () => {
  return (
    <section className=" grid grid-rows-2 grid-cols-2">
      <Image
        className="w-full col-span-full row-span-full rounded-3xl"
        src={Placeholder}
        alt="Placeholder"
      ></Image>
      <Button
        styling=" col-span-full mb-4 ml-4 row-2 self-end"
        size="sm"
        isfilled={true}
        isStroke={false}
        color="primary"
        text="Dette er en Hund"
        icon=""
        img={
          <Image
            className=" col-span-full row-span-full rounded-3xl"
            width={50}
            height={50}
            src={Placeholder}
            alt="Placeholder"
          ></Image>
        }
      ></Button>
      <div className="flex flex-row p-4 justify-between col-span-full row-1">
        <Button
          styling="justify-self-start"
          size="sm"
          isfilled={true}
          isStroke={false}
          color="primary"
          text=""
          icon={<GrFormPrevious size={25} />}
          img=""
        ></Button>
        <Button
          styling="justify-self-end"
          size="sm"
          isfilled={true}
          isStroke={false}
          color="primary"
          text=""
          icon={<CiStar size={25} />}
          img=""
        ></Button>
      </div>
    </section>
  );
};

export default ViewCard;
