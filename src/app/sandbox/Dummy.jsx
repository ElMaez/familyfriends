"use client";
import useStore from "../sandbox/store/zusstandExemple";

const Dummy = () => {
  const { messages } = useStore();
  console.log("Bell: ", messages);
  return <>{messages > 0 ? "active" : "notactive"}</>;
};

export default Dummy;
