import React from "react";

import { CardProps } from "./types";

const Person: React.FC<CardProps> = ({
  color = "#4e5d66",
  width = 35,
  height = 35
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 39.999"
    >
      <g id="person" transform="translate(-51.318 -110.879)" opacity="0.6">
        <rect
          id="Retângulo_194"
          data-name="Retângulo 194"
          width="40"
          height="39.999"
          transform="translate(51.318 110.879)"
          fill="none"
          opacity="0"
        />
        <path
          id="Caminho_1428"
          data-name="Caminho 1428"
          d="M80.792,131.458a6.618,6.618,0,1,0-11.536,0,6.614,6.614,0,0,0,2.13,12.876h7.275a6.614,6.614,0,0,0,2.13-12.876ZM70.2,128.227a4.822,4.822,0,1,1,9.645,0,4.754,4.754,0,0,1-.969,2.884,3.639,3.639,0,0,1-.443.527,4.773,4.773,0,0,1-2.2,1.256,4.473,4.473,0,0,1-1.209.155,4.387,4.387,0,0,1-1.2-.155,4.848,4.848,0,0,1-3.626-4.667Zm8.46,14.312H71.387a4.823,4.823,0,0,1-.957-9.549,6.619,6.619,0,0,0,9.19,0,4.823,4.823,0,0,1-.957,9.549Z"
          transform="translate(-3.877 -3.09)"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default Person;
