import Image from "next/image";
import Link from "next/link";

import Placeholder from "../../app/img/download.png";
import { CiStar } from "react-icons/ci";
import Button from "./Button";

const AnimalCard = ({ id }) => {
  console.log("animal: ", id);
  return (
    <article className="relative col-span-1 grid card bg-[#FFFFFF] rounded-3xl shadow-slate-800 shadow-md/5">
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
          img=""
        ></Button>
      </div>
      <section className="col-[content] grid grid-cols-2 grid-rows-3 p-4">
        <h2 className="col-1 row-1 font-bold">Harry</h2>
        <p className="col-2 row-1 justify-self-end">Young</p>
        <p className="col-1 row-2">Yorkshire</p>
        <p className="col-1 row-3">Terrier</p>
      </section>
    </article>
  );
};

export default AnimalCard;
