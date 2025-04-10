import Image from "next/image";

import Placeholder from "../../app/img/download.png";
import Button from "../(global)/Button";

const LabelList = () => {
  return (
    <div>
      <h2>Samojed Willie</h2>
      <div className=" flex flex-row justify-between">
        <Button
          styling="col-1 row-2 justify-self-start self-end p-4"
          size="md"
          isfilled={true}
          isStroke={false}
          color="primary"
          text="Dog"
          icon=""
          img=""
        ></Button>
        <Button
          styling="col-1 row-2 justify-self-start self-end p-4"
          size="md"
          isfilled={true}
          isStroke={false}
          color="primary"
          text="Male"
          icon=""
          img=""
        ></Button>
        <Button
          styling="col-1 row-2 justify-self-start self-end p-4"
          size="md"
          isfilled={true}
          isStroke={false}
          color="primary"
          text="Young"
          icon=""
          img=""
        ></Button>
        <Button
          styling="col-1 row-2 justify-self-start self-end p-4"
          size="md"
          isfilled={true}
          isStroke={false}
          color="primary"
          text="Great Dane"
          icon=""
          img=""
        ></Button>
      </div>
    </div>
  );
};

export default LabelList;
