import Image from "next/image";
import Button from "./Button";
import { GoBell } from "react-icons/go";

const Header = () => {
  return (
    <header className="col-[content] row-[header] flex flex-row justify-between pr-4 pt-4 font-bold">
      <h2 className="self-center">FamilyFriends</h2>
      <Button
        size="sm"
        isfilled={false}
        isStroke={false}
        color="noFill"
        icon={<GoBell size={25} />}
      ></Button>
    </header>
  );
};

export default Header;
