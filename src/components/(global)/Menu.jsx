import Link from "next/link";

import { GoHome } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";
import { GoPerson } from "react-icons/go";

const Menu = () => {
  return (
    <footer className="flex flex-row justify-around pt-4 pb-4 col-[content] row-[footer] sticky bottom-0 bg-[#FFFFFF] backdrop-blur-lg">
      <Link href="/">
        <GoHome size={40} />
      </Link>
      <Link href="/favorites">
        <CiStar size={40} />
      </Link>
      <BiMessageRounded size={40} />
      <GoPerson size={40} />
    </footer>
  );
};

export default Menu;
