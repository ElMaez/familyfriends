import Image from "next/image";
import Link from "next/link";

import Placeholder from "../../app/img/download.png";
import { CiStar } from "react-icons/ci";
import Button from "./Button";

const AnimalCard = ({
  id,
  name,
  age,
  breeds,
  contact,
  primary_photo_cropped,
}) => {
  console.log("animal: ", id);
  return (
    <article className="relative card bg-[#FFFFFF] rounded-3xl shadow-slate-800 shadow-md/5">
      <Link id="link" href={`/singleView/${id}`}></Link>
      <div className="w-full col-[content] grid grid-rows-2 grid-cols-2 rounded-3xl">
        <Image
          className="col-span-full row-span-full rounded-3xl"
          src={Placeholder}
          alt="Placeholder"
        ></Image>
        <Button
          styling="col-2 row-1 self-start justify-self-end m-3"
          size="sm"
          isfilled={true}
          isStroke={false}
          color="opaque"
          icon={<CiStar size={25} />}
          img={`${primary_photo_cropped.medium}`}
        ></Button>
      </div>
      <section className="col-[content] p-2">
        <header className="flex justify-between">
          <h2 className="font-bold truncate">{name}</h2>
          <p>{age}</p>
        </header>
        <p>{contact.address.city}</p>
        <p>{breeds?.primary}</p>
      </section>
    </article>
  );
};

export default AnimalCard;
