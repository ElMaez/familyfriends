import Link from "next/link";
import Button from "./Button";
import { GoBell } from "react-icons/go";

const Header = () => {
  return (
    <header className="sticky top-0 col-[content] row-[header] flex flex-row justify-between pr-4 pt-4 font-bold">
      <Link href="/">
        <h2 className="self-center">FamilyFriends</h2>
      </Link>
      <Button
        styling=""
        size="sm"
        isfilled={false}
        isStroke={false}
        color="noFill"
        icon={<GoBell size={25} />}
        img=""
      ></Button>
    </header>
  );
};

export default Header;