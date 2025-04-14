import Button from "../(global)/Button";
import LabelList from "./LabelList";

const SingleInfo = ({ description, animaldata }) => {
  return (
    <section>
      <LabelList {...animaldata}></LabelList>
      <p>{description}</p>
      <p>Opdateret den 13. juli.</p>
    </section>
  );
};

export default SingleInfo;
