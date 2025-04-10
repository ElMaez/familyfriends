import { GoHome } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";
import { GoPerson } from "react-icons/go";

const Menu = () => {
  return (
    <footer className="flex flex-row justify-around pt-4 pb-4 col-[content] row-[footer] sticky bottom-0 bg-[#FFFFFF]">
      <GoHome size={40} />
      <CiStar size={40} />
      <BiMessageRounded size={40} />
      <GoPerson size={40} />
    </footer>
  );
};

export default Menu;
