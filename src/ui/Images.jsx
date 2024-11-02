import { Box } from "@mui/material";
import { useState } from "react";

function Images({ imgName }) {
  const randomLeft = Math.round(Math.random() * 100);
  const randomTop = Math.round(Math.random() * 60);

  return (
    <img
      src={`${imgName}.png`}
      alt={`${imgName}`}
      className="absolute h-10 w-10 object-contain transition-all duration-1000 ease-in-out lg:h-14 lg:w-14"
      style={{ left: `${randomLeft}%`, top: `${randomTop}%` }}
    />
  );
}

export default Images;
