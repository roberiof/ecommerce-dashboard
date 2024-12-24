import React from "react";

import { CardProps } from "./types";

const Gear: React.FC<CardProps> = ({
  color = "#4e5d66",
  width = 35,
  height = 35
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 40"
    >
      <g id="gear" transform="translate(0 0.419)" opacity="0.6">
        <rect
          id="Retângulo_185"
          data-name="Retângulo 185"
          width="40"
          height="40"
          transform="translate(0 -0.419)"
          fill="none"
          opacity="0"
        />
        <g id="Grupo_865" data-name="Grupo 865" transform="translate(9 9.581)">
          <path
            id="Caminho_1420"
            data-name="Caminho 1420"
            d="M223.855,144.71h-8.045a3.284,3.284,0,0,1-2.825-1.618l-3.989-6.8a3.28,3.28,0,0,1,0-3.313l3.989-6.8a3.284,3.284,0,0,1,2.825-1.618h8.045a3.286,3.286,0,0,1,2.825,1.618l3.989,6.8a3.28,3.28,0,0,1,0,3.313l-3.989,6.8A3.286,3.286,0,0,1,223.855,144.71Zm-8.045-18.623a1.754,1.754,0,0,0-1.507.863l-3.989,6.8a1.751,1.751,0,0,0,0,1.767l3.989,6.8a1.754,1.754,0,0,0,1.507.863h8.045a1.753,1.753,0,0,0,1.507-.863l3.989-6.8a1.747,1.747,0,0,0,0-1.767l-3.989-6.8a1.753,1.753,0,0,0-1.507-.863Z"
            transform="translate(-208.548 -124.56)"
            fill={color}
          />
          <path
            id="Caminho_1421"
            data-name="Caminho 1421"
            d="M223.792,140.6h-1.135a1.418,1.418,0,0,1-.717-.193l-.979-.562a1.445,1.445,0,0,1-.526-.524l-.566-.977a1.444,1.444,0,0,1-.193-.718V136.5a1.444,1.444,0,0,1,.192-.717l.567-.977a1.424,1.424,0,0,1,.527-.525l.98-.565a1.438,1.438,0,0,1,.714-.189h1.135a1.433,1.433,0,0,1,.713.189l.984.566a1.427,1.427,0,0,1,.525.524l.566.976a1.435,1.435,0,0,1,.193.718v1.127a1.435,1.435,0,0,1-.193.717l-.567.979a1.437,1.437,0,0,1-.522.523l-.985.565A1.414,1.414,0,0,1,223.792,140.6Zm-1.135-5.612-.966.562-.555.964,0,1.112.562.962.971.552,1.119,0,.966-.562.554-.965,0-1.112-.562-.961-.962-.549Z"
            transform="translate(-211.94 -127.293)"
            fill={color}
          />
        </g>
      </g>
    </svg>
  );
};

export default Gear;