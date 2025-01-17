import React from "react";

import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({
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
      <g id="card" transform="translate(0 0.419)" opacity="0.6">
        <rect
          id="Retângulo_188"
          data-name="Retângulo 188"
          width="40"
          height="40"
          transform="translate(0 -0.419)"
          fill="none"
          opacity="0"
        />
        <g id="Group_471" data-name="Group 471" transform="translate(9 8.581)">
          <path
            id="Caminho_1422"
            data-name="Caminho 1422"
            d="M93.921,663.568H81.19a.954.954,0,1,1,0-1.908H93.921a.954.954,0,1,1,0,1.908Z"
            transform="translate(-76.416 -655.48)"
            fill={color}
          />
          <g id="Group_470" data-name="Group 470">
            <g id="Rectangle_1538" data-name="Rectangle 1538">
              <rect
                id="Retângulo_189"
                data-name="Retângulo 189"
                width="22.28"
                height="22.28"
                rx="7.363"
                transform="translate(0)"
                fill="none"
              />
              <path
                id="Caminho_1423"
                data-name="Caminho 1423"
                d="M91.732,676.792H82.184a6.372,6.372,0,0,1-6.366-6.366v-9.549a6.372,6.372,0,0,1,6.366-6.364h9.548a6.371,6.371,0,0,1,6.365,6.364v9.549A6.372,6.372,0,0,1,91.732,676.792Zm-9.548-20.37a4.461,4.461,0,0,0-4.456,4.456v9.549a4.462,4.462,0,0,0,4.456,4.457h9.548a4.461,4.461,0,0,0,4.455-4.457v-9.549a4.46,4.46,0,0,0-4.455-4.456Z"
                transform="translate(-75.818 -654.512)"
                fill={color}
              />
            </g>
          </g>
          <g
            id="Rectangle_1571"
            data-name="Rectangle 1571"
            transform="translate(4.774 11.139)"
          >
            <rect
              id="Retângulo_190"
              data-name="Retângulo 190"
              width="4.774"
              height="4.774"
              rx="1.841"
              transform="translate(0 0.001)"
              fill="none"
            />
            <path
              id="Caminho_1424"
              data-name="Caminho 1424"
              d="M84.523,672.172H82.932a1.6,1.6,0,0,1-1.592-1.594v-1.591a1.594,1.594,0,0,1,1.592-1.592h1.591a1.594,1.594,0,0,1,1.592,1.592v1.591A1.6,1.6,0,0,1,84.523,672.172Zm-1.591-3.5a.318.318,0,0,0-.319.317v1.591a.32.32,0,0,0,.319.319h1.591a.319.319,0,0,0,.319-.319v-1.591a.317.317,0,0,0-.319-.317Z"
              transform="translate(-81.34 -667.396)"
              fill={color}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Card;
