import Button from "./Button";
import { GoBell } from "react-icons/go";
const Header = () => {
  return (
    <header className=" col-[content] row-1 flex flex-row justify-between p-4 font-bold">
      <h2 className="self-center">FamilyFriends</h2>
      <Button
        // sm, md, lg
        size="sm"
        // fill or stroke
        isfilled={true}
        // leave "" if no color, Primary, Secondary, Tertary ...
        color=""
        // input your own text here
        text=""
        // leave "" if no icon otherwise input icon
        icon={<GoBell size={25}/>}
        // false = no img true = has image
        hasimage={false}
        // wrote img sorce if image
        img=""
      ></Button>
    </header>
  );
};

export default Header;
