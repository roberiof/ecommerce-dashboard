import React from "react";

import { CardProps } from "./types";

const Text: React.FC<CardProps> = ({
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
      <g id="text" transform="translate(0 0.419)" opacity="0.6">
        <rect
          id="Retângulo_191"
          data-name="Retângulo 191"
          width="40"
          height="40"
          transform="translate(0 -0.419)"
          fill="none"
          opacity="0"
        />
        <path
          id="Caminho_1425"
          data-name="Caminho 1425"
          d="M383.2,720.6H366.535a2.812,2.812,0,0,0-2.809,2.809V735.8a2.812,2.812,0,0,0,2.809,2.809h6.192l2.642,2.643a2.208,2.208,0,0,0,3.121,0l2.643-2.643H383.2a2.812,2.812,0,0,0,2.809-2.809V723.413A2.812,2.812,0,0,0,383.2,720.6Zm1.089,3.249v11.479a1.533,1.533,0,0,1-1.527,1.53h-2.112a.509.509,0,0,0-.359.149l-3.05,3.052a.422.422,0,0,1-.581,0l-3.046-3.051a.511.511,0,0,0-.36-.149h-6.276a1.533,1.533,0,0,1-1.528-1.53V723.852a1.528,1.528,0,0,1,1.527-1.528h15.786A1.532,1.532,0,0,1,384.286,723.853Z"
          transform="translate(-354.726 -711.023)"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default Text;
