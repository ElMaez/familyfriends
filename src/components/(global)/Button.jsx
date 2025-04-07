"use client";

const Button = ({ size, isfilled, hasimage, text, color, img, icon }) => {
  let filled = isfilled ? `${color}` : "stroke";
  let image = hasimage ? `<img src=${img} alt=""></img>` : "";
  return (
    <button className={`${filled} ${size}`}>
      {image}
      {text}
      {icon}
    </button>
  );
};

export default Button;
