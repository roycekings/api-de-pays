import React from "react";

const Cards = ({ onMouseLeave, OnMouseEnter, flags, idc }) => {
  const styleBack = {
    backgroundImage: `url(${flags})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className=" ">
      <div
        id={idc}
        onMouseLeave={onMouseLeave}
        onMouseEnter={OnMouseEnter}
        style={styleBack}
        className="  cursor-pointer m-2 bg-slate-100 drop-shadow-md border rounded-full h-32"
      ></div>
    </div>
  );
};

export default Cards;
