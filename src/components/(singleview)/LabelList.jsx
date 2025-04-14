import Image from "next/image";

import Placeholder from "../../app/img/download.png";
import Button from "../(global)/Button";

const LabelList = ({ breeds, age, type, gender, name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <div className=" flex flex-row justify-between">
        <Button
          styling="col-1 row-2 justify-self-start self-end p-4"
          size="md"
          isfilled={true}
          isStroke={false}
          color="primary"
          text={type}
          icon=""
          img=""
        ></Button>
        <Button
          styling="col-1 row-2 justify-self-start self-end p-4"
          size="md"
          isfilled={true}
          isStroke={false}
          color="primary"
          text={gender}
          icon=""
          img=""
        ></Button>
        <Button
          styling="col-1 row-2 justify-self-start self-end p-4"
          size="md"
          isfilled={true}
          isStroke={false}
          color="primary"
          text={age}
          icon=""
          img=""
        ></Button>
        <Button
          styling="col-1 row-2 justify-self-start self-end p-4"
          size="md"
          isfilled={true}
          isStroke={false}
          color="primary"
          text={breeds?.primary}
          icon=""
          img=""
        ></Button>
      </div>
    </div>
  );
};

export default LabelList;
