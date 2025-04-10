const Button = ({
  styling,
  size,
  isfilled,
  isStroke,
  text,
  color,
  img,
  icon,
}) => {
  let filled = isfilled ? `${color}` : "";
  let stroke = isStroke ? "border-[#CACACD] border-2" : "";

  return (
    <button
      className={`${filled} ${size} ${stroke} ${styling} w-fit h-fit flex flex-row gap-2 items-center rounded-full`}
    >
      {img}
      {text}
      {icon}
    </button>
  );
};

export default Button;

//  <Button
//          sm, md, lg
//  size="sm"

//          Fill or not
//  isfilled={false}

//          Stroke or not
//  isStroke={false}

//          Leave "" if no color, Primary, Secondary, Tertary ...
//  color="primary"

//         Input your own text here
//  text="Like"

//          Leave "" if no icon otherwise input icon
//  icon={<GoBell size={25} />}

//          Write img sorce if image change src for another image.
//  img={
//   <Image
//     className="rounded-full"
//     width={50}
//     height={50}
//     alt="det er en kat"
//     src="https://dbw3zep4prcju.cloudfront.net/animal/425595d9-7162-4204-b1d3-25a3db9bf9b4/image/3f16c88c-9364-45db-a5a2-3c0f0f2978f2.jpg?versionId=6iNs4nnLdLC8mQ2cdTd.zSrdHiH7zD9K&bust=1744096050&width=100"
//   ></Image>
//     }
//   ></Button>

// Kopy here
{
  /* <Button
styling="col-2 row-1 justify-self-end"
size="sm"
isfilled={false}
isStroke={false}
color="primary"
text="Like"
icon={<GoBell size={25} />}
img={
 <Image
   className="rounded-full"
   width={50}
   height={50}
   alt="det er en kat"
   src=""
 ></Image>
   }
 ></Button> */
}
